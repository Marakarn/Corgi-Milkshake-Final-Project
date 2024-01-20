// import React from 'react'
import Layout from "./Layout"
import Backfunction from "./components/Backfunction"
import { Link } from "react-router-dom"
import ModalDeleteActivity from "./components/ModalDeleteActivity"
import ModalAddActivity from "./components/ModalAddActivity"
const DeleteActivity = () => {
    return (
        <>
        <Layout>
            <div className="min-h-[980px]">
                <div className="flex flex-col justify-center ">
                    <div className="w-full mt-[120px]">
                        <div className="">
                            {/* <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000] hidden md:flex">
                                <span className="material-symbols-outlined text-[#000000]">
                                    arrow_back
                                </span>
                                Back
                            </button> */}
                            <Backfunction path="/your-activity"/>
                        </div>
                        <h1 className="text-6xl font-semibold text-[#8BCA00] text-center">
                            Delete Activity
                        </h1>
                        <hr className="border-y-[#8BCA00] w-full mt-[75px]" ></hr>
                    </div>
                    <div className="flex flex-col form-control mt-6 w-full items-center ">
                        <form className="card-body">
                            <div className="form-control">
                                <img className="mx-auto p-6" src="./delete-activity.png" alt="" />
                                <h1 className="text-4xl font-bold text-[#E34850] text-center p-6">Do you want to delete activity?</h1>
                                <p className="text-xl font-normal text-center">If you delete your activity the system will delete all data.</p>
                                
                                {/* <Link to="/modal-delete-activity">   */}
                                {/* <button className="btn bg-[#E34850] font-poppins text-xl font-normal text-[#FFFFFF] mt-6">
                                    <span class="material-symbols-outlined text-[#FFFFFF]">
                                        delete
                                    </span>
                                    Delete
                                </button> */}
                                
                                
                                {/* </Link> */}
                                
                            </div>
                        </form>
                        <ModalDeleteActivity/>
                    </div>
                </div>
            </div >
            </Layout>
        </>
    )
}

export default DeleteActivity