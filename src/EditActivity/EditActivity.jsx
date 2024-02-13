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
import axios from "axios"

const EditActivity = () => {
    
    let { state } = useLocation();
    // const { _id } = useParams();
    const _id = state._id
    console.log(_id)

    const initialFormData = { editActivityName: "", editActivityDes: "", editActivityType: "", editActivityIcon: "", editHours: "", editMinutes: "", editDate: "", editActImage: ""}
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

    console.log(formData)
    
    const updateData = async (_id) => {
        
        const requestData = {
            activityName: formData.editActivityName,
            activityDes: formData.editActivityDes,
            activityType: formData.editActivityType,
            activityIcon: formData.editActivityIcon,
            hours: formData.editHours,
            minutes: formData.editMinutes,
            date: formData.editDate,
            actImage: formData.editActImage

        };
        console.log(requestData);

        const response = await axios.put(
            `https://greensculpt.onrender.com/your-activity/${_id}`,
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
                                <Editduration handleInputChange={handleInputChange}/>
                                <Editdate handleInputChange={handleInputChange}/>
                                <Editinputimg handleInputChange={handleInputChange}/>
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