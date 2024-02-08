import React from "react";

const Boxemail = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <label className="">Email Address</label>
          <input
            type="text"
            className="form-control flex items-center focus:outline-none "
            placeholder="Email"
          />
        </div>
        <div className="">
          <span className="material-symbols-outlined text-[#8bca00]">
            edit_square
          </span>
        </div>
      </div>
      <hr className="border-y-[#8BCA00] mt-[5px]"></hr>
    </>
  );
};

export default Boxemail;
