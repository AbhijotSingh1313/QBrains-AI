import os
import json
import requests
from typing import List, Dict, Any, Optional
from .models import ChatMessage

class LLMClient:
    def __init__(self):
        self.provider = os.getenv("LLM_PROVIDER", "gemini").lower()
        self.gemini_key = os.getenv("GEMINI_API_KEY", "")
        self.gemini_model = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")
        self.openai_key = os.getenv("OPENAI_API_KEY", "")
        self.openai_model = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
        self.ollama_base = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434/v1")
        self.ollama_model = os.getenv("OLLAMA_MODEL", "llama3.2")
        self.anthropic_key = os.getenv("ANTHROPIC_API_KEY", "")

    def is_configured(self) -> bool:
        if self.provider == "gemini":
            return bool(self.gemini_key and len(self.gemini_key.strip()) > 5)
        elif self.provider == "openai":
            return bool(self.openai_key and len(self.openai_key.strip()) > 5)
        elif self.provider == "anthropic":
            return bool(self.anthropic_key and len(self.anthropic_key.strip()) > 5)
        elif self.provider == "ollama":
            return True
        return False

    def generate_response(
        self,
        system_prompt: str,
        user_message: str,
        conversation_history: List[ChatMessage],
        circuit_context_str: str
    ) -> str:
        """Dispatches request to configured LLM provider."""
        if self.provider == "gemini":
            return self._call_gemini(system_prompt, user_message, conversation_history, circuit_context_str)
        elif self.provider in ("openai", "ollama"):
            return self._call_openai_compatible(system_prompt, user_message, conversation_history, circuit_context_str)
        elif self.provider == "anthropic":
            return self._call_anthropic(system_prompt, user_message, conversation_history, circuit_context_str)
        else:
            return self._call_gemini(system_prompt, user_message, conversation_history, circuit_context_str)

    def _call_gemini(
        self,
        system_prompt: str,
        user_message: str,
        conversation_history: List[ChatMessage],
        circuit_context_str: str
    ) -> str:
        if not self.gemini_key:
            return "AI Tutor configuration error: GEMINI_API_KEY is not set in backend/.env. Please configure your API key."

        models_to_try = ["gemini-flash-lite-latest", self.gemini_model, "gemini-flash-latest", "gemini-2.0-flash"]
        seen = set()
        models = [m for m in models_to_try if not (m in seen or seen.add(m))]

        # Combine conversation history
        contents = []

        for msg in conversation_history:
            role = "user" if msg.role == "user" else "model"
            contents.append({
                "role": role,
                "parts": [{"text": msg.content}]
            })

        # Append latest user query with circuit context
        prompt_with_context = f"{circuit_context_str}\n\nStudent Query: {user_message}"
        contents.append({
            "role": "user",
            "parts": [{"text": prompt_with_context}]
        })

        payload = {
            "system_instruction": {
                "parts": [{"text": system_prompt}]
            },
            "contents": contents,
            "generationConfig": {
                "temperature": 0.35,
                "maxOutputTokens": 2048
            }
        }

        last_error = ""
        for model in models:
            url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={self.gemini_key}"
            try:
                resp = requests.post(url, json=payload, timeout=16)
                if resp.status_code == 200:
                    data = resp.json()
                    candidates = data.get("candidates", [])
                    if candidates:
                        parts = candidates[0].get("content", {}).get("parts", [])
                        if parts:
                            return parts[0].get("text", "No response text generated.")
                    return "The tutor was unable to generate a response for this query."
                else:
                    err_msg = resp.text
                    try:
                        err_json = resp.json()
                        err_msg = err_json.get("error", {}).get("message", resp.text)
                    except Exception:
                        pass
                    last_error = f"Gemini API ({model}) returned {resp.status_code}: {err_msg}"
                    # Try next candidate model on 404, 429, 503 or other server errors
                    continue
            except requests.exceptions.Timeout:
                last_error = f"Gemini API ({model}) timed out."
                continue
            except Exception as e:
                last_error = f"Error with ({model}): {str(e)}"
                continue

        return last_error or "Gemini API call failed across all candidate models."

    def _call_openai_compatible(
        self,
        system_prompt: str,
        user_message: str,
        conversation_history: List[ChatMessage],
        circuit_context_str: str
    ) -> str:
        is_ollama = self.provider == "ollama"
        url = f"{self.ollama_base}/chat/completions" if is_ollama else "https://api.openai.com/v1/chat/completions"
        model = self.ollama_model if is_ollama else self.openai_model
        api_key = "ollama" if is_ollama else self.openai_key

        messages = [{"role": "system", "content": system_prompt}]
        for msg in conversation_history:
            messages.append({"role": msg.role, "content": msg.content})

        prompt_with_context = f"{circuit_context_str}\n\nStudent Query: {user_message}"
        messages.append({"role": "user", "content": prompt_with_context})

        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {api_key}"
        }
        payload = {
            "model": model,
            "messages": messages,
            "temperature": 0.35
        }

        try:
            resp = requests.post(url, headers=headers, json=payload, timeout=45)
            if resp.status_code == 200:
                data = resp.json()
                return data["choices"][0]["message"]["content"]
            else:
                return f"LLM API Error ({resp.status_code}): {resp.text}"
        except Exception as e:
            return f"Error calling OpenAI-compatible endpoint: {str(e)}"

    def _call_anthropic(
        self,
        system_prompt: str,
        user_message: str,
        conversation_history: List[ChatMessage],
        circuit_context_str: str
    ) -> str:
        url = "https://api.anthropic.com/v1/messages"
        headers = {
            "x-api-key": self.anthropic_key,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json"
        }

        messages = []
        for msg in conversation_history:
            messages.append({"role": msg.role, "content": msg.content})

        prompt_with_context = f"{circuit_context_str}\n\nStudent Query: {user_message}"
        messages.append({"role": "user", "content": prompt_with_context})

        payload = {
            "model": "claude-3-5-sonnet-20241022",
            "max_tokens": 2048,
            "system": system_prompt,
            "messages": messages,
            "temperature": 0.35
        }

        try:
            resp = requests.post(url, headers=headers, json=payload, timeout=45)
            if resp.status_code == 200:
                data = resp.json()
                return data["content"][0]["text"]
            else:
                return f"Anthropic API Error ({resp.status_code}): {resp.text}"
        except Exception as e:
            return f"Error calling Anthropic API: {str(e)}"
