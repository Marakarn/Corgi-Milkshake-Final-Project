// import React from 'react'
import Backfunction from "./Backfunction";
import BackfunctionMobile from "./BackfunctionMobile";
import modalDeleteActivityPic from "/modal-delete-activity.png"
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import axios from "axios";
import { useState } from "react";

const ModalDeleteActivity = ({_id}) => {

  const removeData = async (_id) => {
    const response = await axios.delete(
      `https://greensculpt.onrender.com/your-activity/${_id}`
      // `http://localhost:3000/your-activity/${_id}`
    );

    if (response.status === 200) {
      handleDeleteCard(_id);
      setReload(!reload);
    };

  };

  return (
    <>
      <div className="container mx-auto font-poppins">
        <div className="flex flex-col justify-center ">
          <div className="flex flex-col form-control mt-6 w-full items-center ">
            <button
              className="btn bg-[#E34850] font-poppins text-xl font-normal text-[#FFFFFF] mt-6"
              onClick={() => {document.getElementById("my_modal_1").showModal(), removeData(_id)}}
            >
              <span className="material-symbols-outlined text-[#FFFFFF]">
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
              <Backfunction path="/home"/>
              <BackfunctionMobile path="/home"/>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalDeleteActivity;
