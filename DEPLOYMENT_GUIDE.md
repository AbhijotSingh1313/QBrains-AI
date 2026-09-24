# 🚀 QBrains AI — Vercel Deployment Guide

This guide details how to deploy the entire **QBrains AI** platform (Quantum Circuit Composer, Learning Platform SPA, and FastAPI AI Backend) to **Vercel** with full functionality.

---

## 🏗️ Architecture on Vercel

The project uses Vercel's standard zero-config public static distribution with a serverless Python backend:

| Component | Route | Handled By |
| :--- | :--- | :--- |
| **Main Landing Page** | `/` | Static Edge CDN (`public/index.html`) |
| **Quantum Learning Platform** | `/learn` | React 19 SPA (`public/learn/index.html`) |
| **Quantum Circuit Composer** | `/simulator` | Compiled Quirk-E Simulator (`public/simulator/index.html`) |
| **Static Assets & Fonts** | `/assets/*`, KaTeX fonts | Static Edge CDN (`public/assets/`) |
| **AI Quantum Tutor API** | `/api/*` | Python Serverless Function (`api/index.py` → FastAPI) |

---

## 📋 Environment Variables in Vercel

Under **Project Settings > Environment Variables** on Vercel:

| Key | Recommended Value | Description |
| :--- | :--- | :--- |
| `LLM_PROVIDER` | `gemini` | AI Provider (`gemini` or `openai`) |
| `GEMINI_API_KEY` | `AQ.Ab8RN6...` | Your Google Gemini API Key |
| `GEMINI_MODEL` | `gemini-flash-lite-latest` | Default model |

---

## ⚡ Deployment Steps

1. Push all files to GitHub:
   ```bash
   git add .
   git commit -m "fix(deploy): configure public static directory and vercel rewrites"
   git push origin main
   ```

2. Vercel will automatically trigger a new deployment upon receiving the push to `main`!
3. If deploying manually in the dashboard, import the repository with default settings (`Other` framework, `./` root).
