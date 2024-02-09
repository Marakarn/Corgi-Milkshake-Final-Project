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

  const [name, setName]  = useState("")
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  // const [icon, setIcon] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [date, setDate] = useState("");
  const [actImage, setActImage] = useState("");

  const createData = async (name, description, type, icon, hours, minutes, date, actImage) => {
    const requestData = {
      activityName: name,
      activityDes: description,
      activityType: type,
      // activityIcon: icon,
      hours: hours,
      minutes: minutes,
      date: date,
      actImage: "actImage",
    
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


  return (
    <>
      <Layout>
        <div className="">
          <div className="flex flex-col justify-center min-h-[1080px] md:min-h-[800px] pb-48 md:pb-40">
            <Daisytop text="Add Activity" path="/home" />
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <form className="card-body">
                  <Activityname setName = {setName}/>
                  <Activitydescription setDescription={setDescription} />
                  <Activitiestypes setType={setType}/>
                </form>
              </div>

              <div className="w-full md:w-1/2">
                <form className="p-[32px] pt-0 md:pt-[32px]">
                  <Activityduration setHours={setHours} setMinute={setMinutes} />
                  <Activiydate setDate={setDate} />
                  <Activityimage setActImage={setActImage} />
                </form>
              </div>
            </div>
            <ModalAddActivity submitData = {createData} name={name} description={description} type={type} hours={hours} minutes={minutes} date={date} actImage={actImage}/>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AddActivity;
