import React from "react";

const Activitydescription = ({handleInputChange}) => {
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
          onChange={handleInputChange}
          maxLength="100"></textarea>
      </div>
    </>
  );
};

export default Activitydescription;
