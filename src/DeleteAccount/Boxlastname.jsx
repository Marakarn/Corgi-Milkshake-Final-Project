import React from "react";

const Boxlastname = ({ lastname }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="my-5">
          <label className="text-xl font-medium text-[#BDBDBD]">Last Name:</label>
          <p>{lastname}</p>
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
