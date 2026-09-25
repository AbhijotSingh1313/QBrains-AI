# api/index.py
# Production Serverless Entrypoint for Vercel Python Runtime
import sys
from pathlib import Path

# Add project root and backend to sys.path so modules resolve cleanly
current_dir = Path(__file__).resolve().parent
root_dir = current_dir.parent
sys.path.insert(0, str(root_dir / 'Quirk-E-main'))
sys.path.insert(0, str(root_dir / 'Quirk-E-main' / 'backend'))

from backend.main import app
