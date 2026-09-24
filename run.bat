@echo off
title QBrains AI - Quantum Platform
echo ================================================================
echo   Launching QBrains AI - Quantum Platform
echo ================================================================
echo.
echo 1. Launching FastAPI Application Server on http://localhost:8000
echo    - Main Dashboard:        http://localhost:8000/
echo    - Quantum Learning SPA:  http://localhost:8000/learn
echo    - Quirk-E Simulator:     http://localhost:8000/simulator/index.html
echo    - AI Quantum Tutor API:  http://localhost:8000/api/info
echo.

cd /d "%~dp0Quirk-E-main"
start "" http://localhost:8000/
python -m uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload
pause
