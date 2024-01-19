// import React from 'react'
import Layout from "./Layout"
import Backfunction from "./components/Backfunction"

const History = () => {
    return (
        <>
        <Layout>
            <div className="">
                <div className="flex flex-col justify-center ">
                    <div className="w-full mt-[50px]">
                        <div className="">
                            {/* <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000]">
                                <span className="material-symbols-outlined text-[#000000]">
                                    arrow_back
                                </span>
                                Back
                            </button> */}
                            <Backfunction path="/home"/>
                        </div>
                        <h1 className="text-6xl font-semibold text-[#8BCA00]  text-center">
                            History
                        </h1>
                        <hr className="border-y-[#8BCA00] w-full mt-[75px]" ></hr>
                    </div>

                    <div className="flex ">
                        <div className="block w-1/2 ">
                            <form className="card-body">
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#BDBDBD] font-poppins text-xl font-normal text-[#FFFFFF]">
                                        Plan
                                    </button>

                                    <div className="card card-side bg-base-100 shadow-xl w-full mt-9 border-2 border-[#BDBDBD]">
                                        <div className="card-body p-1">

                                            <div className="hero-content flex-col lg:flex-row justify-between">
                                                <div className="flex flex-row">
                                                    <span class="material-symbols-outlined text-[#000000] text-4xl">
                                                        directions_walk
                                                    </span>

                                                    <div>
                                                        <h2 className="card-title text-2xl text-[#BDBDBD]">Walking alone</h2>
                                                        <p className="text-base text-normal">Walking for exercise</p>
                                                        <p className="text-base text-normal">24/1/2024 (2 hr)</p>

                                                    </div>
                                                </div>

                                                <div className="flex">
                                                    <button className="btn btn-circle bg-[#BDBDBD]">
                                                        <span class="material-symbols-outlined text-[#FFFFFF]">
                                                            play_arrow
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="block w-1/2 ">
                            <form className="card-body">
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#8BCA00] font-poppins text-xl font-normal text-[#FFFFFF]">
                                        In progress
                                    </button>

                                    <div className="card card-side bg-base-100 shadow-xl w-full mt-9 border-2 border-[#8BCA00]">
                                        <div className="card-body p-1">

                                            <div className="hero-content flex-col lg:flex-row justify-between">
                                                <div className="flex flex-row">
                                                    <span class="material-symbols-outlined text-[#000000] text-4xl">
                                                        directions_walk
                                                    </span>

                                                    <div>
                                                        <h2 className="card-title text-2xl text-[#8BCA00]">Walking alone</h2>
                                                        <p className="text-base text-normal">Walking for exercise</p>
                                                        <p className="text-base text-normal">24/1/2024 (2 hr)</p>

                                                    </div>
                                                </div>

                                                <div className="flex">
                                                    <button className="btn btn-circle bg-[#8BCA00]">
                                                        <span class="material-symbols-outlined text-[#FFFFFF]">
                                                            pause
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="block w-1/2 ">
                            <form className="card-body">
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#BDBDBD] font-poppins text-xl font-normal text-[#FFFFFF]">
                                        Finish
                                    </button>

                                    <div className="card card-side bg-base-100 shadow-xl w-full mt-9 border-2 border-[#BDBDBD]">
                                        <div className="card-body p-1">

                                            <div className="hero-content flex-col lg:flex-row justify-between">
                                                <div className="flex flex-row">
                                                    <span class="material-symbols-outlined text-[#000000] text-4xl">
                                                        directions_walk
                                                    </span>

                                                    <div>
                                                        <h2 className="card-title text-2xl text-[#BDBDBD]">Walking alone</h2>
                                                        <p className="text-base text-normal">Walking for exercise</p>
                                                        <p className="text-base text-normal">24/1/2024 (2 hr)</p>

                                                    </div>
                                                </div>

                                                <div className="flex">
                                                    <button className="btn btn-circle bg-[#BDBDBD]">
                                                        <span class="material-symbols-outlined text-[#FFFFFF]">
                                                            done
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>



                    </div>

                </div>
            </div >

        </Layout>
        </>
    )
}

export default History