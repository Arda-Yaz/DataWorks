from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import upload


def create_app() -> FastAPI:
    """
    Application entrypoint.

    This lives in `main.py` because its responsibility is:
    - Creating and configuring the FastAPI app object
    - Wiring routers (e.g., upload, analysis, ml)
    - Setting up middleware, CORS, etc.

    It does NOT contain CSV logic or other business rules — those stay in `core/`.
    """
    app = FastAPI(
        title="DataWorks Backend",
        version="0.1.0",
    )

    # Example CORS config – adjust as your frontend hostname/port changes.
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Mount routers from the api package.
    app.include_router(upload.router)

    return app


app = create_app()

