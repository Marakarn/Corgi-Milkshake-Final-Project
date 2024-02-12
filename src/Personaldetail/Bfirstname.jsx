import React from "react";

const Bfirstname = ({firstname}) => {
  return (
    <>
      <div className="flex flex-1 items-center justify-between">
        <div className="">
          <label className="">First Name</label>
          <p>{firstname}</p>
          <input
            type="text"
            className="form-control items-center"
            placeholder="First Name"
          />
        </div>
        <span className="material-symbols-outlined text-[#8bca00]">
          edit_square
        </span>
      </div>
      <hr className="border-y-[#8BCA00] mt-[5px]"></hr>
    </>
  );
};

export default Bfirstname;
