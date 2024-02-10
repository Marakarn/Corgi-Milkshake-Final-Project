import React from "react";

const Editdes = ({setDescription}) => {
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
          id="editActivityDes"
          onChange={(e)=>setDescription(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Editdes;
