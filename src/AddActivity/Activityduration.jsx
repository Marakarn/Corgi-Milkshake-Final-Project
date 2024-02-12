import React from "react";

const Activityduration = ({handleInputChange}) => {
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-base font-medium">
            Activity duration* :
          </span>
        </label>
        <div className="flex md:justify-between gap-x-1.5">
          <input className="input input-bordered font-normal w-1/2"
            type="number"
            id="hours"
            name="hours"
            min="0"
            max="24"
            maxLength={2}
            placeholder="Hours"
            onChange={handleInputChange} />
          <input className="input input-bordered font-normal w-1/2"
            type="number"
            id="minutes"
            name="minutes"
            min="0"
            max="59"
            maxLength={2}
            placeholder="Minutes"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};

export default Activityduration;
