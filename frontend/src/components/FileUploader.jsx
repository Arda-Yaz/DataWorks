import { useState } from "react";
import { uploadCsv } from "../api/client";

/**
 * Simple CSV file uploader component.
 *
 * Props:
 * - onResult(result): optional callback when the upload succeeds.
 */
export function FileUploader({ onResult }) {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const selected = event.target.files?.[0] || null;
    setFile(selected);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setError("Please choose a CSV file first.");
      return;
    }

    setIsUploading(true);
    setError("");

    try {
      const result = await uploadCsv(file);
      if (onResult) {
        onResult(result);
      }
    } catch (err) {
      setError(err.message || "Something went wrong while uploading.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          disabled={isUploading}
        />
      </div>
      <button type="submit" disabled={isUploading}>
        {isUploading ? "Uploading..." : "Upload CSV"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

