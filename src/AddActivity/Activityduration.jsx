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
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
          </select>
          <select className="input input-bordered font-normal w-1/2" id="minutes" placeholder="Minutes" onChange={handleInputChange}>
            <option value="" disabled selected>Minutes</option>
            {Array.from({ length: 59 }, (_, index) => (
              <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
          </select>
        </div>
        {/* <div className="flex md:justify-between gap-x-1.5">
          <input className="input input-bordered font-normal w-1/2"
            type="number"
            id="hours"
            name="hours"
            maxLength={2}
            placeholder="Hours"
            onChange={handleInputChange} />
          <input className="input input-bordered font-normal w-1/2"
            type="number"
            id="minutes"
            name="minutes"
            maxLength={2}
            placeholder="Minutes"
            onChange={handleInputChange}
          />
        </div> */}
      </div>
    </>
  );
};

export default Activityduration;
