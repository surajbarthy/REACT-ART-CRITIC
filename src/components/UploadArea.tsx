import React from "react";

type Props = {
  onUpload: (file: File) => void;
};

const UploadArea: React.FC<Props> = ({ onUpload }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onUpload(e.target.files[0]);
    }
  };

  return (
    <div>
      <label>
        <strong>Select an image:</strong>
        <input type="file" accept="image/*" onChange={handleChange} />
      </label>
    </div>
  );
};

export default UploadArea;
