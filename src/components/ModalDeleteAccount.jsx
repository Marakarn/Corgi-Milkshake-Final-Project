// import React from 'react'
import Backfunction from "./Backfunction";
import BackfunctionMobile from "./BackfunctionMobile";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ModalDeleteAccount = () => {

  const token = JSON.parse(localStorage.getItem("token"));
  const _id = token.id._id;
  const navigate = useNavigate();

  const removeData = async (_id) => {
    const response = await axios.delete(
      `https://greensculpt.onrender.com/delete-account/${_id}`
      // `http://localhost:3000/delete-account/${_id}`
    );

    if (response.status === 200) {
      setTimeout(() => {
        localStorage.removeItem("token");
        navigate("/login");
      }, 3000);
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
          <img className="mx-auto" src="./modal-delete-activity.png" alt="" />
          <p className="py-4 font-poppins text-base font-normal text-center">
            Account Delete!
          </p>
          <div className="modal-action flex justify-center">
            <form method="dialog">
              {/* <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000] items-center">
                  <span className="material-symbols-outlined text-[#000000]">
                    arrow_back
                  </span>
                  Back to Home
                </button> */}
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalDeleteAccount;
