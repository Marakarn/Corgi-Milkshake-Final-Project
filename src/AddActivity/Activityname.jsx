import React from "react";

const Activityname = ({handleInputChange}) => {
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
          placeholder="Activity Name : Max 30 characters"
          className="input input-bordered text-base font-normal"
          id="activityName"
          required
          onChange={handleInputChange}
          maxLength="30"
        />
      </div>
    </>
  );
};

export default Activityname;
