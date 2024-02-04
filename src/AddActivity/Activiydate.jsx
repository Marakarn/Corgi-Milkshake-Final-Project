import React from "react";

const Activiydate = () => {
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-base font-medium">Date* :</span>
        </label>
        <input
          type="date"
          id="date"
          name="trip-start"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
          className="input input-bordered"
          required
        />
      </div>
    </>
  );
};

export default Activiydate;
