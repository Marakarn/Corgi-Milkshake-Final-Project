import React from "react";

const Activitiestypes = ({setType}) => {
  return (
    <>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-base font-medium">
            Activity Types* :
          </span>
        </label>
        <select className="select select-bordered w-full text-base font-normal " id="activityType" onChange={(e)=>setType(e.target.value)} >
          <option disabled selected>
            Choose
          </option>
          <option value="walking">Walking</option>
          <option value="Running">Running</option>
          <option value="Weight-lifting">Weight-lifting</option>
          <option value="Swimming">Swimming</option>
          <option value="Cycling">Cycling</option>
          <option value="Aerobics">Aerobics</option>
        </select>
      </div>
    </>
  );
};

export default Activitiestypes;
