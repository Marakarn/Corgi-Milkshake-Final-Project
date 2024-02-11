import React from "react";

const Activiydate = ({handleInputChange}) => {
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
          min="2018-01-01"
          className="input input-bordered"
          onChange={handleInputChange}
          required
        />
      </div>
    </>
  );
};

export default Activiydate;
