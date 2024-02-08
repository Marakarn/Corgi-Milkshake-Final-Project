import React from "react";

const Activitydescription = ({setDescription}) => {
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-base font-medium">
            Activity Description :
          </span>
        </label>
        <textarea
          placeholder="Activity Description"
          className="textarea textarea-bordered textarea-lg w-full text-base font-normal"
          id="activityDes"
          onChange={(e)=>setDescription(e.target.value)}></textarea>
      </div>
    </>
  );
};

export default Activitydescription;
