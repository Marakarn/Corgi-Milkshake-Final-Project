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
        <div className="flex gap-2">
          <select className="input input-bordered font-normal w-1/2" id="hours" placeholder="hours" onChange={handleInputChange}>
            <option value="" disabled selected>Hours</option>
            <option value="0">0</option>
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
          </select>
          <select className="input input-bordered font-normal w-1/2" id="minutes" placeholder="Minutes" onChange={handleInputChange}>
            <option value="" disabled selected>Minutes</option>
            <option value="0">0</option>
            {Array.from({ length: 59 }, (_, index) => (
              <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Activityduration;
