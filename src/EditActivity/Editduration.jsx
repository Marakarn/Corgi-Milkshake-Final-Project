import React from "react";

const Editduration = ({handleInputChange}) => {
  return (
    <div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-base font-medium">
            Activity duration* :
          </span>
        </label>
        <div className="flex md:justify-between gap-x-1.5">
          <input
            type="number"
            id="editHours"
            name="hours"
            min="0"
            placeholder="hours"
            className="input input-bordered text-base font-normal w-1/2"
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            id="editMinutes"
            name="minutes"
            min="0"
            max="59"
            placeholder="minutes"
            className="input input-bordered text-base font-normal w-1/2"
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Editduration;
