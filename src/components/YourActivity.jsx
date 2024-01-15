import React from 'react'

const YourActivity = () => {
    return (
        <>
            <div className="container mx-auto font-poppins">
                <div className="flex flex-col justify-center ">
                    <div className="w-full mt-[120px]">
                        <div className="">
                            <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000] hidden md:flex">
                                <span className="material-symbols-outlined text-[#000000]">
                                    arrow_back
                                </span>
                                Back
                            </button>
                        </div>
                        <h1 className="text-6xl font-semibold text-[#8BCA00] text-center">
                            Your Activity
                        </h1>
                        <hr className="border-y-[#8BCA00] w-full mt-[75px]" ></hr>
                    </div>
                    <div className="flex flex-col form-control mt-20 w-full items-center">
                        <div className="card card-side bg-base-100 shadow-xl border-2 border-[#8BCA00]">
                            <div className="card-body">
                                <div className="flex">
                                    <div className="hero-content flex-row">
                                        <span class="material-symbols-outlined text-[#000000] text-4xl">
                                            directions_walk
                                        </span>
                                        <div>
                                            <h2 className="card-title text-2xl text-[#8BCA00]">Walking alone</h2>
                                            <p className="text-base text-normal">Walking for exercise</p>
                                            <p className="text-base text-normal">24/1/2024 (2 hr)</p>
                                        </div>
                                    </div>
                                </div>
                                <img className="mx-auto mt-4" src="./image-activity.png" alt="" />
                                <div className="card-actions justify-center md:justify-end">
                                    <button className="btn bg-[#000000] font-poppins text-xl font-normal text-[#FFFFFF] mt-6 w-2/3 md:w-2/6">
                                        <span class="material-symbols-outlined text-[#FFFFFF]">
                                            border_color
                                        </span>
                                        Edit Activity
                                    </button>
                                    <button className="btn bg-[#E34850] font-poppins text-xl font-normal text-[#FFFFFF] mt-6 w-2/3 md:w-2/6">
                                        <span class="material-symbols-outlined text-[#FFFFFF]">
                                            delete
                                        </span>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default YourActivity