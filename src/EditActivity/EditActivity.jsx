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

    const [name, setName]  = useState("")
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [icon, setIcon] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [date, setDate] = useState("");
    const [actImage, setActImage] = useState("");

    const updateData = async (_id, name, description, type, icon, hours, minutes, date, actImage) => {
        const requestData = {
            activityName: name,
            activityDes: description,
            activityType: type,
            activityIcon: icon,
            hours: hours,
            minutes: minutes,
            date: date,
            actImage: "actImage"

        };
        const response = await axios.put(
            `https://greensculpt.onrender.com/your-activity/${_id}`,
            requestData
        );
    
        if (response.status === 200) {
            setReload(!reload);
            console.log(response);
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
                                <Editname setName = {setName} />
                                <Editdes setDescription={setDescription}/>
                                <Edittypes setType={setType} setIcon={setIcon}/>
                            </form>
                        </div>
                        <div className="w-full md:w-1/2">
                            <form className="p-[32px] pt-0 md:pt-[32px]">
                                <Editduration setHours={setHours} setMinute={setMinutes}/>
                                <Editdate setDate={setDate}/>
                                <Editinputimg setActImage={setActImage}/>
                            </form>
                        </div>
                    </div>
                    <ModalEditActivity _id={state._id} updateData={updateData} name={name} description={description} type={type} icon={icon} hours={hours} minutes={minutes} date={date} actImage={actImage}/>
                </div>
            </div >
            </Layout>
        </>
    )
}

export default EditActivity