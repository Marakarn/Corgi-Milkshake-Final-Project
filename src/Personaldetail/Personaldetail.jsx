// import React from "react";
// import Footer from "./Footer";
import Daisytop from "../components/Daisytop";
import Layout from "../components/Layout";
import Inputpic from "./Inputpic";
import Bfirstname from "./Bfirstname";
import Blastname from "./Blastname";
import Bmail from "./Bmail";
import axios from "axios";
import isEmpty from "validator/lib/isEmpty";
import isAlpha from "validator/lib/isAlpha";
import { useState, useEffect } from "react";
import Bc from "./Bc";

const Personaldetail = () => {

  const [userData, setUserData] = useState([]);
  const [reload, setReload] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));
  const firstname = userData.signup_firstname;
  const lastname = userData.signup_lastname;
  const email = userData.login_email;
  const avatar = userData.signup_photo;
  const id = token.id._id;

  useEffect(()=> {

    const getUserData = async () => {
      const response = await axios.get(
        `https://greensculpt.onrender.com/user-data/${id}`
        // `http://localhost:3000/user-data/${id}`
      );
      setUserData(response.data);
    };

    getUserData();

  }, [reload]);

  const initialFormData = { firstName: "" , lastName: "" }
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { id, value } =e.target;
    setFormData({
        ...formData,
        [id]:value,
    });
  };

  console.log(formData)

  const updateData = async () => {
    // e.preventDefault();

    const isEmptyFname = isEmpty(formData.firstName);
    const isEmptyLname = isEmpty(formData.lastName);

    if(  !isEmptyFname
      && !isEmptyLname
  ){

  try {
      const requestData = {
        signup_firstname: formData.firstName,
        signup_lastname: formData.lastName,
  };

    const response = await axios.put(
      `https://greensculpt.onrender.com/Personaldetail/${id}`,
      // `http://localhost:3000/Personaldetail/${id}`,
      requestData
  );

  if (response.status === 200) {
      // alert("Data successfully sent to the backend!");
      document.getElementById("my_modal_2").showModal();
      setTimeout(() => {
        window.location.reload()
      }, 1000);
      // ทำอย่างอื่นต่อ เช่น redirect หน้า, แสดงข้อความ, ฯลฯ
  }

  } catch (error) {
  console.error("Error sending data", error);
  alert("An error occurred while sending data.");
  }

  };

  };

  return (
    <>
      <Layout>
        <Daisytop text="Personal Detail" />
        <div className="min-h-[1000px] md:min-h-[600px]">
          <div className="flex flex-col md:flex-row">
            <Inputpic avatar={avatar} id={id}/>
            <div className="min-h-[300px] md:w-1/2 p-10">
              <Bfirstname firstname={firstname} handleInputChange={handleInputChange} />
              <Blastname lastname={lastname} handleInputChange={handleInputChange}/>
              <Bmail email={email} />
              {/* <Bc /> */}
              <div className="w-full flex justify-center">
                <button className="btn text-xl text-[#8BCA00] border-2 border-[#8bca00] h-10 mt-10 w-60 rounded-xl bg-white " onClick={updateData}>
                Change Profile
              <span span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <dialog id="my_modal_2" className="modal justify-center">
        <div className="modal-box p-[40px]">
          <img className="mx-auto" src="./modal-edit-personal.png" alt="" />
          <p className="py-4 font-poppins text-base font-normal text-center">
            Successful update Personal Detail!
          </p>
        </div>
      </dialog>

      <dialog id="my_modal_3" className="modal justify-center">
        <div className="modal-box p-[40px]">
          <img className="mx-auto" src="./modal-error-login.svg" />
          <p className="py-4 font-poppins text-base font-normal text-center">
            Error sanding data!
          </p>
        </div>
      </dialog>

      </Layout>
    </>
  );
};

export default Personaldetail;
