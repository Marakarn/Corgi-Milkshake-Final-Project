// import React from 'react'
import Backfunction from "./Backfunction";
import modalDeleteActivityPic from "/modal-delete-activity.png"
const ModalDeleteActivity = () => {
  return (
    <>
      <div className="container mx-auto font-poppins">
        <div className="flex flex-col justify-center ">
          <div className="flex flex-col form-control mt-6 w-full items-center ">
            <button
              className="btn bg-[#E34850] font-poppins text-xl font-normal text-[#FFFFFF] mt-6"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              <span class="material-symbols-outlined text-[#FFFFFF]">
                delete
              </span>
              Delete
            </button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal justify-center">
        <div className="modal-box p-[40px]">
          <img className="mx-auto" src={modalDeleteActivityPic} alt="" />
          <p className="py-4 font-poppins text-base font-normal text-center">
            Successfully deleted activity!
          </p>
          <div className="modal-action flex justify-center">
            <form method="dialog">
              <Backfunction path="/home" />
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalDeleteActivity;
