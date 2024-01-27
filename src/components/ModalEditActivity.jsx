// import React from 'react'

import { Link } from "react-router-dom";

const ModalEditActivity = () => {
  return (
    <>
      <div className="container mx-auto font-poppins">
        <div className="flex flex-col justify-center ">
          <div className="flex flex-col form-control mt-6 w-full items-center ">
            <button
              className="btn bg-[#D2FE71] text-xl font-normal text-[#000000]"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              <span class="material-symbols-outlined text-[#000000]">
                add_circle
              </span>
              Save
            </button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal justify-center">
        <div className="modal-box p-[40px]">
          <img className="mx-auto" src="./modal-add-activity.png" alt="" />
          <p className="py-4 font-poppins text-base font-normal text-center">
            Successfully edited activity!
          </p>
          <div className="modal-action flex justify-center">
            <form method="dialog">
              <Link to="/your-activity">
                <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000] items-center ">
                  <span className="material-symbols-outlined text-[#000000] ">
                    arrow_back
                  </span>
                  Back
                </button>
              </Link>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalEditActivity;
