import React from "react";

const Bfirstname = ({ firstname }) => {
  return (
    <>
      <div className="flex flex-1 items-center justify-between">
        <div className="my-5">
          <label className="text-lg font-medium">First Name: {firstname}</label>
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
