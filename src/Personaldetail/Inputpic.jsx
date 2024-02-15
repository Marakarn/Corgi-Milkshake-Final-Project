import React from "react";
import { useState } from "react";
import axios from "axios";
import isEmpty from "validator/lib/isEmpty";
import { jwtDecode } from "jwt-decode";

const Inputpic = ({avatar}) => {

  const token = JSON.parse(localStorage.getItem("token"));
  const id = token.id._id;

  const initialFormData = { avatarImage: "" }
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("actImage", file);

    try {
      const response = await axios.post(
        // "https://greensculpt.onrender.com/api/upload"
        "http://localhost:3000/api/upload"
      , formData, 
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        const imagePath = `https://jsd6greensculpt.s3.ap-southeast-1.amazonaws.com/${response.data.originalname}`;
        setFormData((prevData) => ({
          ...prevData,
          avatarImage: imagePath,
        }));
        alert('Successfully upload image');
      }
    } catch (error) {
      alert('Error uploading image');
      console.error("Error uploading image:", error);
    }
  };

  console.log(id);

  const updateData = async () => {
    const isEmptyPic = isEmpty(formData.avatarImage);
    if( !isEmptyPic ){

      alert("Valid Data");

    try {
      const requestData = {
        signup_photo: formData.avatarImage
      };
  
      console.log(requestData);
      console.log("id form update" + id);
  
      const response = await axios.put(
        // `https://greensculpt.onrender.com/PersonaldetailImage/${id}`,
        `http://localhost:3000/PersonaldetailImage/${id}`,
        requestData
      );
  
      if (response.status === 200) {
        alert("Data successfully sent to the backend!");
        document.getElementById("my_modal_1").showModal();
        // ทำอย่างอื่นต่อ เช่น redirect หน้า, แสดงข้อความ, ฯลฯ
      } else {
        alert("Failed to send data to the backend.");
      }
    } catch (error) {
      console.error("Error sending data to the backend:", error);
      alert("An error occurred while sending data to the backend.");
    }
    }
  };

  return (
    <>
      <div className="w-full md:w-1/2">
        <div className="form-control mt-10 md:mt-16 items-center">
          <img className="w-40 mb-10" src={avatar} alt="avatar" />
          <label className="label">
            <span className="label-text text-base font-medium"></span>
          </label>
          <input type="file" accept=".jpg, .png, .jpeg" className="file-input file-input-bordered w-80" id="avatarImage" onChange={handleInputChange}/>
          <button className="btn text-xl text-[#8BCA00] border-2 border-[#8bca00] h-10 mt-10 w-80 rounded-xl bg-white " onClick={updateData}>
            Change Profile Picture
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal justify-center">
        <div className="modal-box p-[40px]">
          <img className="mx-auto" src="./modal-edit-personal.png" alt="" />
          <p className="py-4 font-poppins text-base font-normal text-center">
            Successful upload image, re-login to update!
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

export default Inputpic;
