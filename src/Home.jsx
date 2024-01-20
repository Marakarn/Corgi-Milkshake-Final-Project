// import React from 'react'
import Layout from "./Layout"
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <>
        <Layout>
            <div className="md:min-h-[800px] pb-48 md:pb-20">
                <div className="flex flex-col justify-center ">
                    
                    {/* part 1 */}
                    <div className="w-full mt-[50px]">
                        <div className="flex items-center">
                            <img className="mt-4" src="./image-user.png" alt="" />
                            <div className="p-5 md:p-10">
                                <h1 className="text-xl md:text-3xl font-normal">
                                    Welcome back,
                                </h1>
                                <h1 className="text-2xl md:text-5xl font-semibold">
                                    Hello, Suttikarn
                                </h1>
                            </div>
                        </div>
                        <hr className="border-y-[#8BCA00] w-full mt-[40px]" ></hr>
                    </div>
                    {/* part 1 */}

                    {/* part 2: this button need to link to form*/}
                    <Link to="/add-activity">
                    <div className="flex justify-center mt-10">
                        <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000] w-full md:w-1/2">
                            <span class="material-symbols-outlined text-[#000000]">
                                add_circle
                            </span>
                            Add Activity
                        </button>
                    </div>
                    </Link>
                    {/* part 2 */}

                    {/* part 3 */}
                    <div className="flex justify-center">
                        <div className="flex justify-between w-full md:w-1/2 items-center mt-5">
                            <h1 className="text-xl font-medium ">
                                Your Activity
                            </h1>
                            <Link to="/history">
                            <button className="btn bg-[#000000] font-poppins text-xl font-normal text-[#FFFFFF] hidden md:flex">
                                <span class="material-symbols-outlined text-[#FFFFFF]">
                                    history
                                </span>
                                History
                            </button>
                            </Link>
                        </div>
                    </div>
                    {/* part 3 */}

                    {/* Part4 */}
                    {/* <Link to="/your-activity"> */}
                    <div className='flex justify-center'>
                        <Link to="/your-activity" className="bg-base-100 shadow-xl w-full md:w-1/2 mt-9 border-2 border-[#8BCA00] rounded-[10px] p-4">
                            <div className="">                            
                                <div className="flex flex-row lg:flex-row justify-between items-center">
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
                                                play_arrow
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>                            
                        </Link>
                    </div>

                    {/* test another card */}
                    {/* <div className='flex justify-center'>
                        <Link to="/your-activity" className="bg-base-100 shadow-xl w-full md:w-1/2 mt-9 border-2 border-[#8BCA00] rounded-[10px] p-4">
                            <div className="">                            
                                <div className="flex flex-row lg:flex-row justify-between items-center">
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
                                                play_arrow
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>                            
                        </Link>
                    </div>
                    <div className='flex justify-center'>
                        <Link to="/your-activity" className="bg-base-100 shadow-xl w-full md:w-1/2 mt-9 border-2 border-[#8BCA00] rounded-[10px] p-4">
                            <div className="">                            
                                <div className="flex flex-row lg:flex-row justify-between items-center">
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
                                                play_arrow
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>                            
                        </Link>
                    </div>
                    <div className='flex justify-center'>
                        <Link to="/your-activity" className="bg-base-100 shadow-xl w-full md:w-1/2 mt-9 border-2 border-[#8BCA00] rounded-[10px] p-4">
                            <div className="">                            
                                <div className="flex flex-row lg:flex-row justify-between items-center">
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
                                                play_arrow
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>                            
                        </Link>
                    </div> */}
                    {/* </Link> */}
                    {/* Part4 */}
                </div>
            </div >
            </Layout>
        </>
    )
}

export default Home