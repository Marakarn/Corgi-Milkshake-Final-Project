import React from "react";

const Editname = ({setName}) => {
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
          id="editActivityName"
          onChange={(e)=>setName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Editname;
