// import React from 'react'
import Layout from "../components/Layout"
import { Link } from "react-router-dom"
import Daisytop from "../components/Daisytop"
import Btnstart from "./Btnstart"
import Btnedit from "./Btnedit"
import Btndeleteactivity from "./Btndeleteactivity"

const YourActivity = () => {
    return (
        <>
        <Layout>
            <div className="">
                <div className="flex flex-col justify-center pb-[80px]">
                <Daisytop text='Your Activity' path = "/home"/>
                      
                    <div className="flex flex-col form-control mt-20 w-full items-center">
                        <div className="card card-side bg-base-100 shadow-xl border-2 border-[#8BCA00]">
                            <div className="card-body">
                                <div className="flex flex-col md:flex-row justify-between items-center">
                                    {/* hero-content */}
                                    <div className="hero-content flex-row ">
                                        <span class="material-symbols-outlined text-[#000000] text-4xl">
                                            directions_walk
                                        </span>
                                        <div>
                                            <h2 className="card-title text-2xl text-[#8BCA00]">Walking alone</h2>
                                            <p className="text-base text-normal">Walking for exercise</p>
                                            <p className="text-base text-normal">24/1/2024 (2 hr)</p>
                                        </div>
                                    </div>
                                    {/* button start */}
                            
                                 <Btnstart/>
                                </div>
                                <img className="mx-auto mt-4" src="./image-activity.png" alt="" />
                                {/* <div className="card-actions justify-center md:justify-end">  */}
                                {/* ปุ้มนี้ css ไม่โอเค */}
                                
                                <div className="flex justify-center md:justify-end pt-5 ">
                                
                                    <Btnedit/>
                                    
                                    <Btndeleteactivity/>
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        </>
    )
}

export default YourActivity