// import React from "react";
// import Footer from "./Footer";
import Daisytop from "./components/Daisytop";
import Layout from "./Layout";

const Personaldetail = () => {
  return (
    <>
    <Layout>
      <Daisytop />
      <div className="">
        <div class="flex flex-col md:flex-row min-h-[600px]">
          {/* picture side */}
          <div class="w-full md:w-1/2">
            <div className="form-control mt-10 md:mt-48 items-center">
              <label className="label">
                <span className="label-text text-base font-medium"></span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-80"
              />
              <button className="btn text-xl text-[#8BCA00] border-2 border-[#8bca00] h-10 mt-10 w-60 rounded-xl bg-white ">
                Change Profile
                <span class="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <div class="min-h-[500px] md:w-1/2 p-10">
            {/* Detail side */}

            {/* Box first name */}
            <div className="">
            <div className="flex flex-1 items-center justify-between">
                <div className="">
                  <label className="">First Name</label>
                  <input
                    type="text"
                    className="form-control items-center"
                    placeholder="First Name"
                  />
                </div>
                  <span class="material-symbols-outlined text-[#8bca00]">edit_square</span>
              </div>
              <hr className="border-y-[#8BCA00] mt-[5px]"></hr>
              
              
              {/* box last name */}
              <div className="flex flex-1 items-center justify-between">
                <div>
                  <label className="">Last Name</label>
                  <input
                    type="text"
                    className="form-control flex items-center  "
                    placeholder="Last Name"
                  />
                </div>
                  <span class="material-symbols-outlined text-[#8bca00]">edit_square</span>
              </div>
              <hr className="border-y-[#8BCA00] mt-[5px]"></hr>

              {/* box Email */}
              <div className="flex flex-1 items-center justify-between">
                <div>
                  <label className="">Enail Address</label>
                  <input
                    type="text"
                    className="form-control flex items-center"
                    placeholder="Email"
                  />
                </div>
                  <span class="material-symbols-outlined text-[#8bca00]">edit_square</span>
              </div>
              <hr className="border-y-[#8BCA00] mt-[5px]"></hr>

              {/* butoon change */}
              <div className="flex flex-row w-full justify-center">
                <button className="m-20 btn text-xl text-[#8BCA00] border-2 border-[#8bca00] h-10 w-60 rounded-xl bg-white ">
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
      </div>
    </Layout>
    </>
  );
};

export default Personaldetail;
