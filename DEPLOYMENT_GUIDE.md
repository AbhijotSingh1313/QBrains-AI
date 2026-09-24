# 🚀 QBrains AI — Vercel Deployment Guide

This guide details how to deploy the entire **QBrains AI** platform (Quantum Circuit Composer, Learning Platform SPA, and FastAPI AI Backend) to **Vercel** with full functionality.

---

## 🏗️ Architecture on Vercel

The repository is pre-configured with `vercel.json` and a serverless entry point (`api/index.py`) so Vercel can run both the frontend and backend together:

| Component | Route | Handled By |
| :--- | :--- | :--- |
| **Main Landing Page** | `/` | Static HTML/CSS (`dashboard/index.html`) |
| **Quantum Learning Platform** | `/learn` and `/learn/*` | React 19 SPA (`dashboard/index.html`) |
| **Quantum Circuit Composer** | `/simulator` and `/simulator/*` | Compiled Quirk-E Simulator (`Quirk-E-main/out/index.html`) |
| **Static Assets & Fonts** | `/assets/*`, KaTeX fonts | CDN cached from `dashboard/` |
| **AI Quantum Tutor API** | `/api/*` | Python Serverless Function (`api/index.py` → FastAPI) |

---

## 📋 Prerequisites

1. A **[Vercel Account](https://vercel.com/signup)** (Free Hobby tier works great).
2. Your GitHub repository: **[https://github.com/AbhijotSingh1313/QBrains-AI](https://github.com/AbhijotSingh1313/QBrains-AI)**.
3. An LLM API key (e.g., Google Gemini or OpenAI):
   - **Google Gemini API Key**: [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) (Free)
   - **OpenAI API Key**: [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)

---

## ⚡ Method 1: Deploy via Vercel Web Dashboard (Recommended)

### Step 1: Commit and Push the Vercel Files to GitHub
Make sure the newly added `vercel.json`, `api/index.py`, `requirements.txt`, and `.vercelignore` are pushed to GitHub:
```bash
git add vercel.json api/ requirements.txt .vercelignore DEPLOYMENT_GUIDE.md
git commit -m "chore: add vercel deployment configuration and serverless api entrypoint"
git push origin main
```

### Step 2: Import the Project in Vercel
1. Go to **[vercel.com/new](https://vercel.com/new)**.
2. Under **Import Git Repository**, find `QBrains-AI` and click **Import**.

### Step 3: Configure Project Settings
In the configuration screen:
- **Project Name**: `qbrains-ai` (or your preferred name)
- **Framework Preset**: Select **`Other`**
- **Root Directory**: `./` (leave default, do not change)
- **Build and Output Settings**:
  - *Build Command*: Leave default (empty)
  - *Output Directory*: Leave default (empty)
  - *Install Command*: Leave default (empty)

### Step 4: Add Environment Variables
Expand the **Environment Variables** section and add:

| Key | Example Value | Description |
| :--- | :--- | :--- |
| `LLM_PROVIDER` | `gemini` | AI Provider (`gemini`, `openai`, or `anthropic`) |
| `GEMINI_API_KEY` | `AIzaSy...` | Your Google Gemini API Key |
| `GEMINI_MODEL` | `gemini-2.5-flash` | Default Gemini model |
| `OPENAI_API_KEY` | `sk-...` | *(Optional)* If using OpenAI |
| `OPENAI_MODEL` | `gpt-4o-mini` | *(Optional)* OpenAI model |

### Step 5: Click Deploy
Click **Deploy**!
Vercel will build the Python serverless function and upload the static assets. In about 1 to 2 minutes, your deployment will be live!

---

## 💻 Method 2: Deploy via Vercel CLI

If you prefer terminal commands:

1. **Install Vercel CLI globally**:
   ```bash
   npm install -g vercel
   ```

2. **Log in to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy to Preview**:
   ```bash
   vercel
   ```
   Follow the prompts (accept default settings).

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

---

## ✅ Verifying Your Live Deployment

Once deployed, Vercel will give you a domain like `https://qbrains-ai.vercel.app`. Test the following endpoints:

1. **Main Platform**: `https://your-domain.vercel.app/`
2. **Learning Platform**: `https://your-domain.vercel.app/learn`
   - Test navigating lessons, quizzes, changing languages (10 languages supported).
   - Test the new **Personalization** tab.
3. **Quantum Simulator**: `https://your-domain.vercel.app/simulator/index.html`
   - Test dragging gates ($H, X, Y, Z, CNOT$), observing live probabilities, and generating Qiskit code.
4. **Backend AI Tutor Health Check**: `https://your-domain.vercel.app/api/info`
   - Should return `{"service": "Quirk-E AI Quantum Tutor API", "status": "online"}`.

---

## 💡 Troubleshooting & Best Practices

- **API 504 Timeout on Free Tier**:
  Vercel Hobby functions have a 10–15s execution timeout. For fast AI responses, use `gemini-2.5-flash` or `gpt-4o-mini`.
- **Custom Domain**:
  You can connect a custom domain in **Settings > Domains** on your Vercel project dashboard.
