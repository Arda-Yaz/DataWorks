const API_BASE =
  (typeof import.meta !== "undefined" &&
    import.meta.env &&
    import.meta.env.VITE_API_BASE) ||
  "http://localhost:8000";

/**
 * Upload a CSV file to the backend and return the JSON response.
 *
 * This function:
 * - Knows how to talk to the backend (URL, HTTP method, headers/body format)
 * - Does NOT know about React components or UI.
 */
export async function uploadCsv(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_BASE}/upload/csv`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    const message =
      errorBody.detail || `Upload failed with status ${response.status}`;
    throw new Error(message);
  }

  return response.json();
}

