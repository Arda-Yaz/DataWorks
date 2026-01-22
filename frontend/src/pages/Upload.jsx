import { useState } from "react";
import { FileUploader } from "../components/FileUploader";

export function Upload() {
  const [result, setResult] = useState(null);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Upload CSV</h1>
      <p>Select a CSV file to upload and preview.</p>

      <FileUploader onResult={setResult} />

      {result && (
        <div style={{ marginTop: "1rem" }}>
          <h2>Preview</h2>
          <p>
            Filename: <strong>{result.filename}</strong>
          </p>
          <p>Total rows: {result.row_count}</p>

          {Array.isArray(result.columns) && result.columns.length > 0 && (
            <div style={{ marginTop: "1rem" }}>
              <h3>Columns</h3>
              <table border="1" cellPadding="4" style={{ marginTop: "0.5rem" }}>
                <thead>
                  <tr>
                    <th>Column Name</th>
                    <th>Type</th>
                    <th>Missing Values</th>
                  </tr>
                </thead>
                <tbody>
                  {result.columns.map((col) => (
                    <tr key={col.name}>
                      <td>{col.name}</td>
                      <td>{col.inferred_type}</td>
                      <td>{col.missing_count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {Array.isArray(result.preview) && result.preview.length > 0 && (
            <table border="1" cellPadding="4">
              <thead>
                <tr>
                  {Object.keys(result.preview[0]).map((col) => (
                    <th key={col}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {result.preview.map((row, index) => (
                  <tr key={index}>
                    {Object.entries(row).map(([key, value]) => (
                      <td key={key}>{String(value)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

