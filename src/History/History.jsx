// import React from 'react'
import Layout from "../components/Layout"
import Backfunction from "../components/Backfunction"
import Daisytop from "../components/Daisytop"
import Plan from "./Plan"
import Hisinprogress from "./Hisinprogress"
import Hisfinish from "./Hisfinish"

const History = () => {
    return (
        <>
        <Layout>
            <div className="min-h-[800px]">
                <div className="flex flex-col justify-center ">
                <Daisytop text='History' path = "/home"/>

                    <div className="flex ">
                        <div className="block w-1/2 ">
                            <form className="card-body">
                                {/* Plan */}
                                <Plan/>
                            </form>
                        </div>
                        {/* Inprogress */}
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
                        {/* <Hisinprogress/> */}

                        {/* Finish */}
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
                        {/* <Hisfinish/> */}



                    </div>

                </div>
            </div >

        </Layout>
        </>
    )
}

export default History