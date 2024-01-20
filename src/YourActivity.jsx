// import React from 'react'
import Layout from "./Layout"
import Backfunction from "./components/Backfunction"
import { Link } from "react-router-dom"

const YourActivity = () => {
    return (
        <>
        <Layout>
            <div className="">
                <div className="flex flex-col justify-center pb-[80px]">
                    <div className="w-full mt-[50px]">
                        <div className="">
                            {/* <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000] hidden md:flex">
                                <span className="material-symbols-outlined text-[#000000]">
                                    arrow_back
                                </span>
                                Back
                            </button> */}
                            <Backfunction path="/home"/>
                        </div>
                        <h1 className="text-6xl font-semibold text-[#8BCA00] text-center">
                            Your Activity
                        </h1>
                        <hr className="border-y-[#8BCA00] w-full mt-[75px]" ></hr>
                    </div>
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
                                    <Link to="/start-activity"> 
                                    <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000] ">
                                <span className="material-symbols-outlined text-[#000000] ">
                                    play_circle
                                </span>
                                Start
                            </button>
                            </Link>
                                </div>
                                <img className="mx-auto mt-4" src="./image-activity.png" alt="" />
                                {/* <div className="card-actions justify-center md:justify-end">  */}
                                {/* ปุ้มนี้ css ไม่โอเค */}
                                
                                <div className="flex justify-center md:justify-end pt-5 ">
                                <Link to="/edit-activity">                                
                                    <button className="btn bg-[#000000] font-poppins text-xl font-normal text-[#FFFFFF] ">
                                        <span class="material-symbols-outlined text-[#FFFFFF]">
                                            border_color
                                        </span>
                                        Edit Activity
                                    </button>
                                    </Link>   
                                    
                                    <Link to="/delete-activity"> 
                                    <button className="btn bg-[#E34850] font-poppins text-xl font-normal text-[#FFFFFF] ">
                                        <span class="material-symbols-outlined text-[#FFFFFF]">
                                            delete
                                        </span>
                                        Delete
                                    </button>
                                    </Link>  
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            </Layout>
        </>
    )
}

export default YourActivity