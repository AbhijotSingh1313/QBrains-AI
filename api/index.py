# api/index.py
# Serverless entry point for Vercel Python runtime.
import sys
from pathlib import Path

# Add project root and backend to sys.path so modules resolve cleanly
root_dir = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(root_dir / 'Quirk-E-main'))
sys.path.insert(0, str(root_dir / 'Quirk-E-main' / 'backend'))

from backend.main import app
