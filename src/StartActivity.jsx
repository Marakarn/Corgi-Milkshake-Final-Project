// import React from 'react'
import Layout from "./Layout"
import Backfunction from "./components/Backfunction"

const StartActivity = () => {
    return (
        <>
        <Layout>
            <div className="min-h-[1080px] md:min-h-[800px]">
                <div className="flex flex-col justify-center">
                    <div className="w-full mt-[50px]">
                        <div className="">
                            {/* <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000] hidden md:flex">
                                <span className="material-symbols-outlined text-[#000000]">
                                    arrow_back
                                </span>
                                Back
                            </button> */}
                            <Backfunction path="/your-activity"/>
                        </div>
                        <h1 className="text-6xl font-semibold text-[#8BCA00]  text-center">
                            Start Activity
                        </h1>
                        <hr className="border-y-[#8BCA00] w-full mt-[75px]" ></hr>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 ">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-3xl font-medium">Warm Up</span>
                                    </label>
                                    <iframe class="w-full aspect-video ..." src="https://youtu.be/f3zOrYCwquE?si=-aBXLYmytVMtjGt9"></iframe>
                                    {/* <video className="aspect-video" src="https://youtu.be/f3zOrYCwquE?si=-aBXLYmytVMtjGt9">
                                    </video> */}
                                </div>
                            </form>
                        </div>
                        <div className="w-full md:w-1/2 ">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-3xl font-medium">Timer</span>
                                    </label>

                                    {/* ห้ามลบ walking */}
                                    <div className="flex flex-col form-control mt-6 w-full items-center ">
                                        <span class="material-symbols-outlined text-[#000000] text-7xl">
                                            directions_walk
                                        </span>

                                        <p className="text-2xl text-normal mt-4">Walking</p>
                                    </div>

                                    {/* ห้ามลบ running */}
                                    {/* <div className="flex flex-col form-control mt-6 w-full items-center ">
                                        <span class="material-symbols-outlined text-[#000000] text-7xl">
                                            directions_run
                                        </span>

                                        <p className="text-2xl text-normal mt-4">Running</p>
                                    </div> */}

                                    {/* ห้ามลบ weight-lifting */}
                                    {/* <div className="flex flex-col form-control mt-6 w-full items-center ">
                                        <span class="material-symbols-outlined text-[#000000] text-7xl">
                                            exercise
                                        </span>

                                        <p className="text-2xl text-normal mt-4">Weight-lifting</p>
                                    </div> */}

                                    {/* ห้ามลบ swimming */}
                                    {/* <div className="flex flex-col form-control mt-6 w-full items-center ">
                                        <span class="material-symbols-outlined text-[#000000] text-7xl">
                                            pool
                                        </span>

                                        <p className="text-2xl text-normal mt-4">Swimming</p>
                                    </div> */}

                                    {/* ห้ามลบ cycling */}
                                    {/* <div className="flex flex-col form-control mt-6 w-full items-center ">
                                        <span class="material-symbols-outlined text-[#000000] text-7xl">
                                            directions_bike
                                        </span>

                                        <p className="text-2xl text-normal mt-4">Cycling</p>
                                    </div> */}

                                    {/* ห้ามลบ aerobics */}
                                    {/* <div className="flex flex-col form-control mt-6 w-full items-center ">
                                        <span class="material-symbols-outlined text-[#000000] text-7xl">
                                            sports_gymnastics
                                        </span>

                                        <p className="text-2xl text-normal mt-4">Aerobics</p>
                                    </div> */}

                                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center mt-6">
                                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                            <span className="countdown font-mono text-5xl">
                                                <span style={{ "--value": 10 }}></span>
                                            </span>
                                            hours
                                        </div>
                                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                            <span className="countdown font-mono text-5xl">
                                                <span style={{ "--value": 24 }}></span>
                                            </span>
                                            min
                                        </div>
                                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                            <span className="countdown font-mono text-5xl">
                                                <span style={{ "--value": 39 }}></span>
                                            </span>
                                            sec
                                        </div>
                                    </div>
                                    <div className="flex flex-col form-control w-full items-center mt-16">
                                        <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000]">
                                            <span class="material-symbols-outlined text-[#000000]">
                                                play_circle
                                            </span>
                                            Start
                                        </button>
                                    </div>

                                    {/* ห้ามลบ stop button */}
                                    {/* <div className="flex flex-col form-control mt-6 w-full items-center ">
                                        <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000]">
                                            <span class="material-symbols-outlined text-[#000000]">
                                                pause_circle
                                            </span>
                                            Pause
                                        </button>
                                    </div> */}
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

export default StartActivity