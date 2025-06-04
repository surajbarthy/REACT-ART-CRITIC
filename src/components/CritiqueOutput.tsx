import React from "react";

type Props = {
  critique: string | null;
};

const CritiqueOutput: React.FC<Props> = ({ critique }) => {
  if (!critique) return null;

  return (
    <div className="mt-8">
      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-200">
        <div className="p-6 space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">Critique</h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">{critique}</p>
        </div>
      </div>
    </div>
  );
};

export default CritiqueOutput;
