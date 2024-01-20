import React from "react";

const Activityname = () => {
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-base font-medium">
            Activity Name* :
          </span>
        </label>
        <input
          type="text"
          placeholder="Activity Name"
          className="input input-bordered text-base font-normal"
          required
        />
      </div>
    </>
  );
};

export default Activityname;
