import React from "react";

const Editdes = () => {
  return (
    <div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-base font-medium">
            Activity Description :
          </span>
        </label>
        <textarea
          placeholder="Activity Description"
          className="textarea textarea-bordered textarea-lg w-full text-base font-normal"
        ></textarea>
      </div>
    </div>
  );
};

export default Editdes;
