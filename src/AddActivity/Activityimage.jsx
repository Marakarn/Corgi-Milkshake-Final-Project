import React from "react";

const Activityimage = ({setActImage}) => {
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-base font-medium">Image :</span>
        </label>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-x"
          id="actImage"
          onChange={(e)=>setActImage(e.target.value)}
        />
      </div>
    </>
  );
};

export default Activityimage;
