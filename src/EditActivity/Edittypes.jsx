import React from "react";

const Edittypes = () => {
  return (
    <div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-base font-medium">
            Activity Types* :
          </span>
        </label>
        <select className="select select-bordered w-full text-base font-normal">
          <option disabled selected>
            Choose
          </option>
          <option>Walking</option>
          <option>Running</option>
          <option>Weight-lifting</option>
          <option>Swimming</option>
          <option>Cycling</option>
          <option>Aerobics</option>
        </select>
      </div>
    </div>
  );
};

export default Edittypes;
