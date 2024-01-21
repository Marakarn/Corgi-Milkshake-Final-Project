// import React from 'react'
import Layout from "../components/Layout"
import Backfunction from "../components/Backfunction"
import ModalDeleteAccount from "../components/ModalDeleteAccount"
import Daisytop from "../components/Daisytop"


const DeleteAccount = () => {
    return (
        <>
        <Layout>
            
            <div className="container mx-auto font-poppins min-h-[980px]">
            <Daisytop text='Delete Account' path = "/delete-acc"/>
                    <div className="flex flex-col form-control mt-6 w-full items-center ">
                        <form className="card-body">
                            <div className="form-control">
                                <img className="mx-auto p-6" src="./delete-activity.png" alt="" />
                                <h1 className="text-4xl font-bold text-[#E34850] text-center p-6">Do you want to delete account?</h1>
                                <p className="text-xl font-normal text-center">If you delete your account the system will delete all data.</p>
                            </div>
                        </form>
                        <ModalDeleteAccount/>
                    </div>
                </div>
            
        </Layout>
        </>
    )
}

export default DeleteAccount