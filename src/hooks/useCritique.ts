import { useState } from "react";

export function useCritique() {
  const [loading, setLoading] = useState(false);
  const [critique, setCritique] = useState<string | null>(null);

  const generateCritique = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setCritique(null);

    try {
      const res = await fetch("http://localhost:8000/critique", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setCritique(data.critique || "No critique returned.");
    } catch (err) {
      setCritique("An error occurred while generating the critique.");
      console.error(err);
    }

    setLoading(false);
  };

  return { loading, critique, generateCritique };
}
