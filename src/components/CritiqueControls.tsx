import React from "react";

interface Props {
  onCritique: () => void;
  loading: boolean;
}

const CritiqueControls: React.FC<Props> = ({ onCritique, loading }) => {
  return (
    <div style={{ marginTop: "1.5rem" }}>
      <button
        onClick={onCritique}
        disabled={loading}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          fontWeight: "bold",
          backgroundColor: loading ? "#aaa" : "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "0.375rem",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Analyzing..." : "Critique"}
      </button>
    </div>
  );
};

export default CritiqueControls;
