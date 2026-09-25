# api/index.py
# Production Serverless Entrypoint for Vercel Python Runtime
import sys
import urllib.parse
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
        if scope["type"] == "http":
            query_bytes = scope.get("query_string", b"")
            query_str = query_bytes.decode("latin1")
            params = urllib.parse.parse_qs(query_str)

            # 1. Check if routed via __vercel_path query parameter
            if "__vercel_path" in params:
                raw_path = params["__vercel_path"][0]
                new_path = "/" + raw_path.lstrip("/")
                if not new_path.startswith("/api"):
                    new_path = "/api" + new_path
                scope["path"] = new_path
                # Clean up query string
                cleaned = {k: v for k, v in params.items() if k != "__vercel_path"}
                scope["query_string"] = urllib.parse.urlencode(cleaned, doseq=True).encode("latin1")

            # 2. Check headers for real matched path from Vercel edge
            else:
                current_path = scope.get("path", "")
                if "index.py" in current_path or current_path in ("/api", "/api/", ""):
                    for k, v in scope.get("headers", []):
                        if k.lower() in (b"x-forwarded-uri", b"x-matched-path", b"x-vercel-matched-path"):
                            f_path = v.decode("latin1").split("?")[0]
                            if f_path:
                                scope["path"] = f_path
                                break

            # 3. Ensure path is cleanly formatted
            p = scope.get("path", "")
            if p.startswith("/api/index.py"):
                scope["path"] = "/api/info"

        await self.app(scope, receive, send)

app = VercelRouteMiddleware(backend_app)
