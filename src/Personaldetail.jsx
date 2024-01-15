import React from "react";
import Footer from "./Footer";
import Daisytop from "./Daisytop";

const Personaldetail = () => {
  return (
    <>
      <Daisytop />
      <div class="flex w-full max-w-[1640px] max-h-[500px] m-auto px-4 py-12 font-poppins flex-wrap">
        {/* picture side */}
        <div class="grid h-[400] flex-grow card rounded-box place-items-center items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium"></span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-x"
            />
            <button className="m-20 btn text-xl text-[#8BCA00] border-2 border-[#8bca00] h-10 w-[300px] rounded-xl bg-white ">
              Change Profile
              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        <div class="grid h-[500px] flex-grow card place-items-center ">
          {/* Detail side */}

          {/* Box first name */}
          <div className=" flex flex-col justify-center p-auto m-auto ">
          <div className="flex items-center justify-between">
              <div>
                <label className="inline">First Name</label>
                <input
                  type="text"
                  className="form-control flex items-center  "
                  placeholder="Frist Name"
                />
              </div>
              <div className="">
                <span class="material-symbols-outlined text-[#8bca00]">edit_square</span>
              </div>
            </div>
            <hr className="border-y-[#8BCA00] mt-[5px]"></hr>
            
            
            {/* box last name */}
            <div className="flex items-center justify-between">
              <div>
                <label className="inline">Last Name</label>
                <input
                  type="text"
                  className="form-control flex items-center  "
                  placeholder="Last Name"
                />
              </div>
              <div className="">
                <span class="material-symbols-outlined text-[#8bca00]">edit_square</span>
              </div>
            </div>
            <hr className="border-y-[#8BCA00] mt-[5px]"></hr>

            {/* box Email */}
            <div className="flex items-center justify-between">
              <div>
                <label className="inline">Enail Address</label>
                <input
                  type="text"
                  className="form-control flex items-center  "
                  placeholder="Email"
                />
              </div>
              <div className="">
                <span class="material-symbols-outlined text-[#8bca00]">edit_square</span>
              </div>
            </div>
            <hr className="border-y-[#8BCA00] mt-[5px]"></hr>

            {/* butoon change */}
            <div className="flex flex-row w-full justify-center">
              <button className="m-20 btn text-xl text-[#8BCA00] border-2 border-[#8bca00] h-10 w-[300px] rounded-xl bg-white ">
                Change Name
                <span class="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-row w-full justify-center py-20 font-poppins">
        <button className=" border h-10 w-[300px] shadow-md shadow-[#8bca00] rounded-md bg-[#8bca00] text-white">
          Save change
        </button> */}
      </div>

      <Footer />
    </>
  );
};

export default Personaldetail;
