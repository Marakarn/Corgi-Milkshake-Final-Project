import React from "react";

const Editdes = ({handleInputChange}) => {
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
          onChange={handleInputChange}
          maxlength="100"
        ></textarea>
      </div>
    </div>
  );
};

export default Editdes;
