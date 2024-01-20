// import React from 'react'
import Layout from "./Layout"
import Backfunction from "./components/Backfunction"
import ModalDeleteAccount from "./components/ModalDeleteAccount"



const DeleteAccount = () => {
    return (
        <>
        <Layout>
            <div className="container mx-auto font-poppins min-h-[980px]">
                <div className="flex flex-col justify-center ">
                    <div className="w-full mt-[120px]">
                        <div className="">
                        <Backfunction path="/delete-acc"/>
                        </div>
                        <h1 className="text-6xl font-semibold text-[#8BCA00] text-center">
                            Delete Account
                        </h1>
                        <hr className="border-y-[#8BCA00] w-full mt-[75px]" ></hr>
                    </div>
                    <div className="flex flex-col form-control mt-6 w-full items-center ">
                        <form className="card-body">
                            <div className="form-control">
                                <img className="mx-auto p-6" src="./delete-activity.png" alt="" />
                                <h1 className="text-4xl font-bold text-[#E34850] text-center p-6">Do you want to delete account?</h1>
                                <p className="text-xl font-normal text-center">If you delete your account the system will delete all data.</p>
                                {/* <button className="btn bg-[#E34850] font-poppins text-xl font-normal text-[#FFFFFF] mt-6">
                                    <span class="material-symbols-outlined text-[#FFFFFF]">
                                        delete
                                    </span>
                                    Delete
                                </button> */}
                                {/* <button className="btn font-poppins text-xl font-normal mt-6">
                                    Cancle
                                </button> */}
                            </div>
                        </form>
                        <ModalDeleteAccount/>
                    </div>
                </div>
            </div >
        </Layout>
        </>
    )
}

export default DeleteAccount