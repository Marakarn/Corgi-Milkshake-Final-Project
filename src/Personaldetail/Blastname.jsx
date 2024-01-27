import React from "react";

const Blastname = () => {
  return (
    <>
      <div className="flex flex-1 items-center justify-between">
        <div>
          <label className="">Last Name</label>
          <input
            type="text"
            className="form-control flex items-center  "
            placeholder="Last Name"
          />
        </div>
        <span class="material-symbols-outlined text-[#8bca00]">
          edit_square
        </span>
      </div>
      <hr className="border-y-[#8BCA00] mt-[5px]"></hr>
    </>
  );
};

export default Blastname;
