// import React from 'react'
import Backfunction from "./Backfunction";
import BackfunctionMobile from "./BackfunctionMobile";
import { Link } from "react-router-dom";
import { mockData } from "../mockData";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import modalAddactivityPic from "/modal-add-activity.png"

const ModalEditActivity = ({_id, updateData}) => {

  const handleSubmit = () => {
    updateData(_id);
  };

  return (
    <>
      <div className="container mx-auto font-poppins">
        <div className="flex flex-col justify-center ">
          <div className="flex flex-col form-control mt-6 w-full items-center ">
            <button
              className="btn bg-[#D2FE71] text-xl font-normal text-[#000000]"
              onClick={handleSubmit}
            >
              <span className="material-symbols-outlined text-[#000000]">
                add_circle
              </span>
              Save
            </button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal justify-center">
        <div className="modal-box p-[40px]">
          <img className="mx-auto" src={modalAddactivityPic} alt="" />
          <p className="py-4 font-poppins text-base font-normal text-center ">
            Successfully edit activity!
          </p>
          <div className="modal-action flex justify-center">
            <Backfunction path={"/home"} />
            <BackfunctionMobile path="/home"/>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_2" className="modal justify-center">
        <div className="modal-box p-[40px]">
          {/* <img className="mx-auto" src="./modal-add-activity.png" alt="" /> */}
          <p className="py-4 font-poppins text-base font-normal text-center">
            You must correct all required form field (with "*") and date must be present or future!
          </p>
          <div className="modal-action flex justify-center">
          <form method="dialog">
            <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000] items-center ">
              <span className="material-symbols-outlined text-[#000000] ">
                arrow_back
              </span>
                Back
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalEditActivity;
