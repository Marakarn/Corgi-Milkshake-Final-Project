// import React from 'react'
import Backfunction from "./Backfunction";
import modalDeleteActivityPic from "/modal-delete-activity.png"
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import axios from "axios";
import { useState } from "react";

const ModalDeleteActivity = ({_id}) => {

  const removeData = async (_id) => {
    const response = await axios.delete(
      `https://greensculpt.onrender.com/your-activity/${_id}`
    );

    if (response.status === 200) {
      handleDeleteCard(_id);
      setReload(!reload);
    };

  };

  const handleDeleteCard = async (_id) => {
    try {
      const response = await axios.delete(`https://greensculpt.onrender.com/api/delete-image`, {
        data: {
          imagePath: "path_to_your_image.jpg" // ใส่ path ที่ต้องการลบ
        }
      });
      if (response.status === 200) {
        // ดำเนินการหลังจากลบรูปภาพสำเร็จ
      }
    } catch (error) {
      console.error("Error deleting image:", error);
      // แสดงข้อความหรือดำเนินการเพิ่มเติมเมื่อเกิดข้อผิดพลาด
    }
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
              <Backfunction path="/home" />
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalDeleteActivity;
