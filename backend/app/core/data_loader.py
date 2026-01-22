from types import NoneType
from typing import List, Dict, Any

import csv
from io import StringIO, TextIOWrapper

from fastapi import UploadFile


def load_csv_from_upload(file: UploadFile, encoding: str = "utf-8") -> List[Dict[str, Any]]:
    """
    Core CSV loading logic.

    This lives in `core` because it is:
    - Pure application logic (reading and interpreting CSVs)
    - Reusable from many different entrypoints (HTTP, scripts, tests)
    - Independent of HTTP frameworks (FastAPI, etc.) other than the minimal
      `UploadFile` type we accept for convenience.

    Returns a list of rows, each row represented as a dict: {column_name: value}.
    """
    # FastAPI's UploadFile gives us a SpooledTemporaryFile in binary mode.
    # We wrap it in TextIOWrapper so the csv module can read text.
    text_stream = TextIOWrapper(file.file, encoding=encoding)

    # Read the entire file content as text.
    content = text_stream.read()

    # Provide a text buffer for csv.DictReader.
    string_buffer = StringIO(content)

    reader = csv.DictReader(string_buffer)
    rows: List[Dict[str, Any]] = [dict(row) for row in reader]

    # Optional: reset the file pointer if something else wants to read it later.
    file.file.seek(0)

    return rows


def preview_csv_rows(rows: List[Dict[str, Any]], limit: int = 5) -> List[Dict[str, Any]]:
    """
    Small helper to get the first N rows of a CSV result.

    This stays in `core` so other parts of the system (CLI, tests, notebooks)
    can use the same preview behavior, not only HTTP endpoints.
    """
    return rows[:limit]


def infer_column_type(values: List[str]) -> str:
    """
    Very simple type inference for a single column.

    - Tries integer
    - Then tries float
    - Falls back to "string"

    This is intentionally naive but good enough for a first pass.
    """
    cleaned = [v for v in values if v is not None and v != ""]

    if not cleaned:
        return "unknown"

    # Try to treat everything as an integer.
    try:
        for v in cleaned:
            int(v)
        return "integer"
    except ValueError:
        pass

    # Try to treat everything as a float.
    try:
        for v in cleaned:
            float(v)
        return "float"
    except ValueError:
        pass

    # Give up and call it a string.
    return "string"


def build_dataset_metadata(rows: List[Dict[str, Any]]) -> Dict[str, Any]:
    """
    Build basic metadata about the dataset:

    - total row count
    - column names
    - simple inferred type per column
    """
    row_count = len(rows)

    if not rows:
        # No data: return an empty structure.
        return {
            "row_count": 0,
            "columns": [],
        }

    # Assume all rows have roughly the same keys.
    column_names = list(rows[0].keys())

    columns_info: List[Dict[str, Any]] = []

    for name in column_names:
        missing_count = sum(1 for row in rows if row.get(name) is None or row.get(name)=="")
        values = [str(row.get(name, "")) for row in rows]
        col_type = infer_column_type(values)

        columns_info.append(
            {
                "name": name,
                "inferred_type": col_type,
                "missing_count": missing_count,
            }
        )

    return {
        "row_count": row_count,
        "columns": columns_info,
    }

