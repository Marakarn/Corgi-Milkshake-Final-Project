import React from "react";

const Boxfirstname = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <label className="from-control items-center ">First Name</label>
          <input
            type="text"
            className="form-control items-center focus:outline-none "
            placeholder="Frist Name"
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

export default Boxfirstname;
