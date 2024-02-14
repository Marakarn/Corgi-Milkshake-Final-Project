import React from "react";

const Inputpic = ({avatar}) => {
  return (
    <>
      <div className="w-full md:w-1/2">
        <div className="form-control mt-10 md:mt-10 items-center">
          <img className="w-40 mb-10" src={avatar} alt="avatar" />
          <label className="label">
            <span className="label-text text-base font-medium"></span>
          </label>
          <input type="file" accept=".jpg .png .jpeg" className="file-input file-input-bordered w-80" />
        </div>
      </div>
    </>
  );
};

export default Inputpic;
