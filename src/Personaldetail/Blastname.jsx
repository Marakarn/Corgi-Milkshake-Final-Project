import React from "react";

const Blastname = ({ lastname, handleInputChange }) => {
  return (
    <>
      <div className="flex flex-1 items-center justify-between">
        <div className="my-5">
          <label className="text-lg font-medium">Last Name: {lastname}</label>
          <input
            type="text"
            className="form-control flex items-center  "
            placeholder="Set new last name"
            id="lastName"
            onChange={handleInputChange}
            maxLength="30"
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

export default Blastname;
