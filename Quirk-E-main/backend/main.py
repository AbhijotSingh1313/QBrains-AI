import os
import sys
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables from backend/.env
env_path = Path(__file__).parent / ".env"
load_dotenv(dotenv_path=env_path)

from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from .models import (
    ChatRequest, ChatResponse, StatusResponse,
    LearningChatRequest, LearningStatusResponse
)
from .rag.rag_service import RAGService
from .llm_client import LLMClient
from .tutor_prompt import build_system_prompt, format_circuit_context
from .learning_tutor_prompt import build_learning_system_prompt


app = FastAPI(
    title="Quirk-E AI Quantum Tutor API",
    description="Circuit-aware educational AI tutor backend with RAG and multi-provider LLM support.",
    version="1.0.0"
)

# Enable CORS for browser frontend (including file:// and localhost)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from fastapi.staticfiles import StaticFiles

# Mount static files for Quirk-E simulator
out_dir = Path(__file__).parent.parent / "out"
if out_dir.exists():
    app.mount("/simulator", StaticFiles(directory=str(out_dir), html=True), name="simulator")

# Initialize RAG and LLM services
rag_service = RAGService()
llm_client = LLMClient()

@app.get("/api/info")
def root_info():
    return {
        "service": "Quirk-E AI Quantum Tutor API",
        "status": "online",
        "version": "1.0.0",
        "endpoints": ["/api/tutor/chat", "/api/tutor/status", "/api/tutor/rag-topics"]
    }

@app.get("/api/tutor/status", response_model=StatusResponse)
def get_status():
    return StatusResponse(
        status="ready" if llm_client.is_configured() else "unconfigured",
        provider=llm_client.provider,
        model=llm_client.gemini_model if llm_client.provider == "gemini" else (
            llm_client.openai_model if llm_client.provider in ("openai", "ollama") else "claude-3-5-sonnet"
        ),
        rag_topics_count=len(rag_service.indexed_topics),
        has_api_key=llm_client.is_configured()
    )

@app.get("/api/tutor/rag-topics")
def get_rag_topics():
    return {
        "topics": rag_service.indexed_topics,
        "count": len(rag_service.indexed_topics)
    }

@app.post("/api/tutor/chat", response_model=ChatResponse)
def chat_with_tutor(req: ChatRequest):
    if not req.message or not req.message.strip():
        raise HTTPException(status_code=400, detail="Student query cannot be empty.")

    # 1. Build circuit search keywords
    search_query = req.message
    if req.circuit_context and req.circuit_context.operations:
        gate_names = " ".join([op.gate for op in req.circuit_context.operations])
        search_query = f"{req.message} {gate_names}"

    # 2. Retrieve relevant quantum knowledge via RAG
    retrieved_chunks = rag_service.retrieve(search_query, top_k=3)
    rag_context = rag_service.format_grounding_context(retrieved_chunks)

    # 3. Format circuit context representation
    circuit_context_str = format_circuit_context(req.circuit_context)

    # 4. Construct pedagogical prompt
    system_prompt = build_system_prompt(req.difficulty, rag_context)

    # 5. Generate response from LLM
    reply_text = llm_client.generate_response(
        system_prompt=system_prompt,
        user_message=req.message,
        conversation_history=req.conversation_history,
        circuit_context_str=circuit_context_str
    )

    # 6. Build circuit summary for UI indicator
    circuit_summary = None
    if req.circuit_context and req.circuit_context.qubits > 0:
        circuit_summary = f"{req.circuit_context.qubits} Qubits · {len(req.circuit_context.operations)} Gates"

    # 7. Format clean source citations
    sources = []
    for c in retrieved_chunks:
        sources.append({
            "title": c.get("title", ""),
            "section": c.get("section", ""),
            "category": c.get("category", "")
        })

    return ChatResponse(
        reply=reply_text,
        sources=sources,
        circuit_summary=circuit_summary,
        provider=llm_client.provider,
        model=llm_client.gemini_model if llm_client.provider == "gemini" else llm_client.openai_model
    )

# ============================================================================
# Dedicated Learning Platform AI Tutor Endpoints (Isolated from Simulator)
# ============================================================================

@app.get("/api/learning-tutor/status", response_model=LearningStatusResponse)
def get_learning_tutor_status():
    return LearningStatusResponse(
        status="ready" if llm_client.is_configured() else "unconfigured",
        provider=llm_client.provider,
        model=llm_client.gemini_model if llm_client.provider == "gemini" else (
            llm_client.openai_model if llm_client.provider in ("openai", "ollama") else "claude-3-5-sonnet"
        ),
        curriculum_levels=11,
        has_api_key=llm_client.is_configured()
    )

@app.post("/api/learning-tutor/chat", response_model=ChatResponse)
def chat_with_learning_tutor(req: LearningChatRequest):
    if not req.message or not req.message.strip():
        raise HTTPException(status_code=400, detail="Learning question cannot be empty.")

    # 1. Search knowledge relevant to the student query & current lesson
    search_terms = req.message
    if req.lesson_context and req.lesson_context.lesson_title:
        search_terms = f"{req.message} {req.lesson_context.lesson_title}"
    
    retrieved_chunks = rag_service.retrieve(search_terms, top_k=3)
    rag_context = rag_service.format_grounding_context(retrieved_chunks)

    # 2. Build dedicated pedagogical prompt
    req_lang = req.language or (req.lesson_context.language if req.lesson_context else "en")
    system_prompt = build_learning_system_prompt(
        difficulty=req.difficulty or "beginner",
        lesson_context=req.lesson_context,
        quick_action=req.quick_action,
        rag_context=rag_context,
        language=req_lang
    )

    # 3. Generate response using LLM
    reply_text = llm_client.generate_response(
        system_prompt=system_prompt,
        user_message=req.message,
        conversation_history=req.conversation_history
    )

    # 4. Format clean sources
    sources = []
    for c in retrieved_chunks:
        sources.append({
            "title": c.get("title", ""),
            "section": c.get("section", ""),
            "category": c.get("category", "")
        })

    return ChatResponse(
        reply=reply_text,
        sources=sources,
        circuit_summary="Learning Platform Curriculum",
        provider=llm_client.provider,
        model=llm_client.gemini_model if llm_client.provider == "gemini" else llm_client.openai_model
    )

# Static files for dashboard landing page and /learn SPA routing
dashboard_dir = Path(__file__).parent.parent / "dashboard"

@app.get("/learn")
@app.get("/learn/{full_path:path}")
def serve_learning_platform(full_path: str = ""):
    index_file = dashboard_dir / "index.html"
    if index_file.exists():
        return FileResponse(index_file)
    raise HTTPException(status_code=404, detail="Learning Platform not found")

if dashboard_dir.exists():
    app.mount("/", StaticFiles(directory=str(dashboard_dir), html=True), name="dashboard")

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    host = os.getenv("HOST", "0.0.0.0")
    print(f"Starting Quirk-E AI Quantum Tutor FastAPI server on http://{host}:{port}")
    uvicorn.run(app, host=host, port=port)
