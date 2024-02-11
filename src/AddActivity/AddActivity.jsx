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
import { useState } from "react";

const AddActivity = () => {

  const initialFormData = { activityName: "", activityDes: "", activityType: "", activityIcon: "", hours: "", minutes: "", date: "", actImage: ""}
  const [formData, setFormData] = useState(initialFormData);

  // const [name, setName]  = useState("")
  // const [description, setDescription] = useState("");
  // const [type, setType] = useState("");
  // const [icon, setIcon] = useState("");
  // const [hours, setHours] = useState("");
  // const [minutes, setMinutes] = useState("");
  // const [date, setDate] = useState("");
  // const [actImage, setActImage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } =e.target;
    setFormData({
        ...formData,
        [id]:value,
    });
  }

  const createData = async (e) => {

    const requestData = {
      activityName: formData.activityName,
      activityDes: formData.activityDes,
      activityType: formData.activityType,
      activityIcon: formData.activityIcon,
      hours: formData.hours,
      minutes: formData.minutes,
      date: formData.date,
      actImage: formData.actImage

    };
    console.log(requestData);

    const response = await axios.post(
      "https://greensculpt.onrender.com/add-activity",
      requestData
    );

    if (response.status === 200) {
      alert("Data successfully sent to the backend!");
      // ทำอย่างอื่นต่อ เช่น redirect หน้า, แสดงข้อความ, ฯลฯ
  } else {
      alert("Failed to send data to the backend.");
  }
  
};
  console.log(formData)

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
                  <Activiydate handleInputChange={handleInputChange} />
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
