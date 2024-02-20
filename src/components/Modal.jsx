// import React from 'react'
import BackfunctionMobile from "./BackfunctionMobile";
import Backfunction from "./Backfunction";
import { Link } from "react-router-dom";

const Modal = ({picture, text}) => {
  return (
    <>
      <dialog id="my_modal_1" className="modal justify-center">
        <div className="modal-box p-[40px] flex flex-col justify-center">
          <img className="mx-auto w-48" src={picture} alt="" />
          <p className="py-4 font-poppins text-base font-normal text-center">
            {text}
          </p>
          <form method="dialog">
          <button className="flex btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000] mx-auto">
            <span className="material-symbols-outlined text-[#000000]">
              arrow_back
            </span>
              Back
          </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
