// import React from 'react'
import Layout from "../components/Layout"
import { useParams } from "react-router-dom"
import ModalEditActivity from "../components/ModalEditActivity"
import Daisytop from "../components/Daisytop"
import Editname from "./Editname"
import Editdes from "./Editdes"
import Edittypes from "./Edittypes"
import Editduration from "./Editduration"
import Editdate from "./Editdate"
import Editinputimg from "./Editinputimg"
import { useLocation } from "react-router-dom";
import { useState } from "react"
import axios from "axios";
import isEmpty from 'validator/lib/isEmpty';
import toDate from "validator/lib/toDate";
import toInt from "validator/lib/toInt";

const EditActivity = () => {
    
    let { state } = useLocation();
    // const { _id } = useParams();
    const _id = state._id
    // console.log(_id)

    const today = new Date().toISOString().split("T")[0];

    const [dateMsg, setDateMsg] = useState("");
    const [dateMsgColor, setDateMsgColor] = useState("")

    const [durationMsg, setDurationMsg] = useState("");
    const [durationMsgColor, setDurationMsgColor] = useState("")

    const initialFormData = { editActivityName: "", editActivityDes: "", editActivityType: "", editActivityIcon: "", editHours: "", editMinutes: "", editDate: "", editActImage: "https://images.pexels.com/photos/878151/pexels-photo-878151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
    const [formData, setFormData] = useState(initialFormData);

    const token = JSON.parse(localStorage.getItem("token"));
    const id = token.id._id

    const handleInputChange = (e) => {
        const { id, value } =e.target;
        setFormData({
            ...formData,
            [id]:value,
        });

        if (id === "editHours" || id === "editMinutes") {

            const isEmptyHours = isEmpty(formData.editHours);
            const isEmptyMinutes = isEmpty(formData.editMinutes);
            // หากค่าทั้งสองเป็น 0 กำหนดค่าทั้งหมดเป็นค่าเปล่า
            if (id === "editHours" && value === "0" && document.getElementById("editMinutes").value === "0") {
              document.getElementById("editHours").value = "";
              document.getElementById("editMinutes").value = "";
            } else if (id === "editMinutes" && value === "0" && document.getElementById("editHours").value === "0") {
              document.getElementById("editHours").value = "";
              document.getElementById("editMinutes").value = "";
            };

            if (isEmptyHours && isEmptyMinutes){
                setDurationMsg("You must select both hours and minutes")
                setDurationMsgColor("text-red-500")
              } else {
                setDurationMsg("")
                setDurationMsgColor("")
              };
        };

        if (id === "editDate") {
            const isDateNotPresent = formData.editDate > today;
            if(isDateNotPresent){
              setDateMsg("")
              setDateMsgColor("")
            } else {
              setDateMsg("Date must be present or future")
              setDateMsgColor("text-red-500")
            };
          };
    };

    // console.log(formData)
    
    const updateData = async (_id) => {

        const isEmptyActivityName = isEmpty(formData.editActivityName);
        const isEmptyActivityType = isEmpty(formData.editActivityType);
        const isEmptyActivityHours = isEmpty(formData.editHours);
        const isEmptyActivityMinutes = isEmpty(formData.editMinutes);
        const isEmptyActivityDate = isEmpty(formData.editDate);
        const isDateNotPresent = formData.editDate >= today;
        
        if(  !isEmptyActivityName
            && !isEmptyActivityType
            && !isEmptyActivityHours
            && !isEmptyActivityMinutes
            && !isEmptyActivityDate
            && isDateNotPresent
        ){
            // alert("Valid Data");
        
        try {
            const requestData = {

                activityName: formData.editActivityName,
                activityDes: formData.editActivityDes,
                activityType: formData.editActivityType,
                activityIcon: formData.editActivityIcon,
                hours: toInt(formData.editHours),
                minutes: toInt(formData.editMinutes),
                date: toDate(formData.editDate),
                actImage: formData.editActImage,
                status: "plan",
                user_id: id

        };

        // console.log(requestData);

        const response = await axios.put(
            `https://greensculpt.onrender.com/your-activity/${_id}`,
            // `http://localhost:3000/your-activity/${_id}`,
            requestData
        );
        
        if (response.status === 200) {
            // alert("Data successfully sent to the backend!");
            document.getElementById("my_modal_1").showModal();
            // ทำอย่างอื่นต่อ เช่น redirect หน้า, แสดงข้อความ, ฯลฯ
        } else {
            alert("Failed to send data to the backend.");
        }
    } catch (error) {
        console.error("Error sending data", error);
        alert("An error occurred while sending data.");
    }
    
    } else{
        // alert("Invalid Data");
        document.getElementById("my_modal_2").showModal();
    };

    // console.log(requestData);

};

    return (
        <>
        <Layout>
            <div className="">
                <div className="flex flex-col justify-center min-h-[1080px] md:min-h-[800px] pb-48 md:pb-40">
                <Daisytop text='Edit Activity'/>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2">
                            <form className="card-body">
                                <Editname handleInputChange={handleInputChange} />
                                <Editdes handleInputChange={handleInputChange}/>
                                <Edittypes handleInputChange={handleInputChange} setFormData={setFormData}/>
                            </form>
                        </div>
                        <div className="w-full md:w-1/2">
                            <form className="p-[32px] pt-0 md:pt-[32px]">
                                <Editduration handleInputChange={handleInputChange} durationMsg={durationMsg} durationMsgColor={durationMsgColor}/>
                                <Editdate handleInputChange={handleInputChange} setFormData={setFormData} formData={formData} dateMsg={dateMsg} dateMsgColor={dateMsgColor}/>
                                <Editinputimg handleInputChange={handleInputChange} setFormData={setFormData}/>
                            </form>
                        </div>
                    </div>
                    <ModalEditActivity _id={state._id} updateData={updateData}/>
                </div>
            </div >
            </Layout>
        </>
    )
}

export default EditActivity