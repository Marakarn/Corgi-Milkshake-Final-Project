import React from "react";

const Editname = () => {
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
          required
        />
      </div>
    </div>
  );
};

export default Editname;