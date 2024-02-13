import React from "react";

const Boxfirstname = ({ firstname }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="my-5">
          <label className="text-xl font-medium text-[#BDBDBD]">First Name:</label>
          <p>{firstname}</p>
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
