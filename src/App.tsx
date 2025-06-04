import React, { useState } from "react";
import UploadArea from "./components/UploadArea";
import CritiqueControls from "./components/CritiqueControls";
import CritiqueOutput from "./components/CritiqueOutput";
import { useCritique } from "./hooks/useCritique";

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const { critique, loading, generateCritique } = useCritique();

  const handleUpload = (newFile: File) => {
    setFile(newFile);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL(reader.result as string);
    };
    reader.readAsDataURL(newFile);
  };

  const handleCritique = () => {
    if (file) generateCritique(file);
  };

  return (
    <main style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#2563eb", marginBottom: "1rem" }}>
        AI Art Critic
      </h1>

      <UploadArea onUpload={handleUpload} />

      {previewURL && (
        <>
          <div style={{ marginTop: "1.5rem" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Preview</h2>
            <img
              src={previewURL}
              alt="Uploaded artwork"
              style={{ borderRadius: "0.5rem", maxWidth: "100%", height: "auto" }}
            />
          </div>

          <CritiqueControls onCritique={handleCritique} loading={loading} />
        </>
      )}

      <CritiqueOutput critique={critique} />
    </main>
  );
}

export default App;
