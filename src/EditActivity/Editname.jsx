import React from "react";

const Editname = ({handleInputChange}) => {
  return (
    <div>
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
          id="editActivityName"
          required
          onChange={handleInputChange}
          maxlength="30"
        />
      </div>
    </div>
  );
};

export default Editname;
