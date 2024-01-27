import React from "react";

const Inputpic = () => {
  return (
    <>
      <div class="w-full md:w-1/2">
        <div className="form-control mt-10 md:mt-48 items-center">
          <label className="label">
            <span className="label-text text-base font-medium"></span>
          </label>
          <input type="file" className="file-input file-input-bordered w-80" />
          <button className="btn text-xl text-[#8BCA00] border-2 border-[#8bca00] h-10 mt-10 w-60 rounded-xl bg-white ">
            Change Profile
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Inputpic;
