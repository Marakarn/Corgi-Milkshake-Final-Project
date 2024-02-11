import React from "react";

const Activityimage = ({handleInputChange}) => {
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-base font-medium">Image :</span>
        </label>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-x"
          accept=".jpg, .png, .jpeg"
          id="actImage"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default Activityimage;
