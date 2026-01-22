from typing import Any, Dict

from fastapi import APIRouter, UploadFile, File, HTTPException, status

from app.core.data_loader import (
    load_csv_from_upload,
    preview_csv_rows,
    build_dataset_metadata,
)

router = APIRouter(prefix="/upload", tags=["upload"])


@router.post("/csv", summary="Upload a CSV file and get a small preview back")
async def upload_csv(file: UploadFile = File(...)) -> Dict[str, Any]:
    """
    HTTP layer for CSV upload.

    - Handles: request/response, HTTP status codes, and validation errors.
    - Delegates: all CSV parsing and business logic to `core.data_loader`.

    This keeps the API layer thin and focused on transport concerns only.
    """
    if not file.filename.lower().endswith(".csv"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Only .csv files are supported.",
        )

    try:
        rows = load_csv_from_upload(file)
        preview = preview_csv_rows(rows, limit=5)
        metadata = build_dataset_metadata(rows)
    except Exception as exc:  # broad by design at the boundary
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Failed to read CSV file: {exc}",
        ) from exc

    return {
        "filename": file.filename,
        "row_count": metadata["row_count"],
        "columns": metadata["columns"],
        "preview": preview,
    }

