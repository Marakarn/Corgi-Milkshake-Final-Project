// import React from 'react'
import Layout from "../components/Layout"
import Backfunction from "../components/Backfunction"
import { Link } from "react-router-dom"
import ModalEditActivity from "../components/ModalEditActivity"
import Daisytop from "../components/Daisytop"
import Editname from "./Editname"
import Editdes from "./Editdes"
import Edittypes from "./Edittypes"
import Editduration from "./Editduration"
import Editdate from "./Editdate"
import Editinputimg from "./Editinputimg"

const EditActivity = () => {
    return (
        <>
        <Layout>
            <div className="">
                <div className="flex flex-col justify-center min-h-[1080px] md:min-h-[800px]">
                <Daisytop text='Edit Activity' path = "/your-activity"/>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2">
                            <form className="card-body">
                                <Editname/>
                                <Editdes/>
                                <Edittypes/>
                            </form>
                        </div>
                        <div className="w-full md:w-1/2">
                            <form className="p-[32px] pt-0 md:pt-[32px]">
                                <Editduration/>
                                <Editdate/>
                                <Editinputimg/>
                            </form>
                        </div>
                    </div>
                    <ModalEditActivity/>
                </div>
            </div >
            </Layout>
        </>
    )
}

export default EditActivity