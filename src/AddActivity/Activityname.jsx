import React from "react";

const Activityname = ({setName}) => {
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
          id="activityName"
          required
          onChange={(e)=>setName(e.target.value)}
        />
      </div>
    </>
  );
};

export default Activityname;
