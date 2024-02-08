import React from "react";

const Boxlastname = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <label className="">Last Name</label>
          <input
            type="text"
            className="form-control items-center focus:outline-none  "
            placeholder="Last Name"
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

export default Boxlastname;
