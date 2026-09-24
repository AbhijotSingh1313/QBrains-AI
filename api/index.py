# api/index.py
# Production Serverless Entrypoint for Vercel Python Runtime
import sys
from pathlib import Path

# Add project root and backend to sys.path so modules resolve cleanly
current_dir = Path(__file__).resolve().parent
root_dir = current_dir.parent
sys.path.insert(0, str(root_dir / 'Quirk-E-main'))
sys.path.insert(0, str(root_dir / 'Quirk-E-main' / 'backend'))

from backend.main import app as backend_app
from starlette.types import ASGIApp, Scope, Receive, Send

class VercelRouteMiddleware:
    def __init__(self, app: ASGIApp):
        self.app = app

    async def __call__(self, scope: Scope, receive: Receive, send: Send):
        if scope['type'] == 'http':
            path = scope.get('path', '')
            # If Vercel stripped /api, prepend /api so it matches FastAPI routes
            if not path.startswith('/api'):
                scope['path'] = '/api' + ('' if path == '/' else path)
        await self.app(scope, receive, send)

app = VercelRouteMiddleware(backend_app)
