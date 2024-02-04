import React from "react";

const Activiydate = ({setDate}) => {
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
          onChange={(e)=>setDate(e.target.value)}
          required
        />
      </div>
    </>
  );
};

export default Activiydate;
