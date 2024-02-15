// import React from 'react'

import { Link } from "react-router-dom";

const ModalTimeUp = () => {
  return (
    <>
      <div className="container mx-auto font-poppins">
        <div className="flex flex-col justify-center ">
          <div className="flex flex-col form-control mt-6 w-full items-center ">
          </div>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal justify-center">
        <div className="modal-box p-[40px]">
          <img className="mx-auto" src="/modal-add-activity.png" alt="" />
          <p className="py-4 font-poppins text-base font-normal text-center">
          Congratulations, you have finished workout!
          </p>
          <Link to={"/home"} className="flex btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000] mx-auto">
            <span className="material-symbols-outlined text-[#000000]">
              arrow_back
            </span>
              Back
          </Link>
        </div>
      </dialog>
    </>
  );
};

export default ModalTimeUp;
