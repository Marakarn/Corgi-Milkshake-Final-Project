import React from "react";

const Editinputimg = () => {
  return (
    <div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-base font-medium">Image :</span>
        </label>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-x"
        />
      </div>
    </div>
  );
};

export default Editinputimg;