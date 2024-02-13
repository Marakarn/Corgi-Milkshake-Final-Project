// import React from 'react'
import Layout from "../components/Layout";
import ModalAddActivity from "../components/ModalAddActivity";
import Daisytop from "../components/Daisytop";
import Activityname from "./Activityname";
import Activitydescription from "./Activitydescription";
import Activitiestypes from "./Activitiestypes";
import Activityduration from "./Activityduration";
import Activiydate from "./Activiydate";
import Activityimage from "./Activityimage";
import axios from "axios";
import isEmpty from 'validator/lib/isEmpty';
import toDate from "validator/lib/toDate";
import toInt from "validator/lib/toInt";
import { useState } from "react";

const AddActivity = () => {

  const today = new Date().toISOString().split("T")[0];

  const initialFormData = { activityName: "", activityDes: "", activityType: "", activityIcon: "", hours: "", minutes: "",status: "", date: "", actImage: "https://images.pexels.com/photos/878151/pexels-photo-878151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  const [formData, setFormData] = useState(initialFormData);

  const token = JSON.parse(localStorage.getItem("token"));
  const id = token.id._id

  const handleInputChange = (e) => {
    const { id, value } =e.target;
    setFormData({
        ...formData,
        [id]:value,
    });

    if (id === "hours" || id === "minutes") {
      // หากค่าทั้งสองเป็น 0 กำหนดค่าทั้งหมดเป็นค่าเปล่า
      if (id === "hours" && value === "0" && document.getElementById("minutes").value === "0") {
        document.getElementById("hours").value = "";
        document.getElementById("minutes").value = "";
      } else if (id === "minutes" && value === "0" && document.getElementById("hours").value === "0") {
        document.getElementById("hours").value = "";
        document.getElementById("minutes").value = "";
      };
    };
  };

  console.log(formData)

  const createData = async (e) => {
    e.preventDefault();

    const isEmptyActivityName = isEmpty(formData.activityName);
    const isEmptyActivityType = isEmpty(formData.activityType);
    const isEmptyActivityHours = isEmpty(formData.hours);
    const isEmptyActivityMinutes = isEmpty(formData.minutes);
    const isEmptyActivityDate = isEmpty(formData.date);
    const isDateNotPresent = formData.date >= today;

    if(  !isEmptyActivityName
      && !isEmptyActivityType
      && !isEmptyActivityHours
      && !isEmptyActivityMinutes
      && !isEmptyActivityDate
      && isDateNotPresent
    ){
      alert("Valid Data");
    
    try {
      const requestData = {

        activityName: formData.activityName,
        activityDes: formData.activityDes,
        activityType: formData.activityType,
        activityIcon: formData.activityIcon,
        hours: toInt(formData.hours),
        minutes: toInt(formData.minutes),
        date: toDate(formData.date),
        actImage: formData.actImage,
        status: "plan",
        user_id: id

      };

      console.log(requestData);

      const response = await axios.post(
      "https://greensculpt.onrender.com/add-activity",
      // `http://localhost:3000/add-activity`,
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

    } else{
      alert("Invalid Data");
      document.getElementById("my_modal_2").showModal();
    };
  
  console.log(requestData);

};

  return (
    <>
      <Layout>
        <div className="">
          <div className="flex flex-col justify-center min-h-[1080px] md:min-h-[800px] pb-48 md:pb-40">
            <Daisytop text="Add Activity"/>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <form className="card-body">
                  <Activityname handleInputChange={handleInputChange} />
                  <Activitydescription handleInputChange={handleInputChange} />
                  <Activitiestypes handleInputChange={handleInputChange} setFormData={setFormData}/>
                </form>
              </div>

              <div className="w-full md:w-1/2">
                <form className="p-[32px] pt-0 md:pt-[32px]">
                  <Activityduration handleInputChange={handleInputChange} />
                  <Activiydate handleInputChange={handleInputChange} setFormData={setFormData} formData={formData}/>
                  <Activityimage handleInputChange={handleInputChange} />
                </form>
              </div>
            </div>
            <ModalAddActivity submitData={createData}/>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AddActivity;
