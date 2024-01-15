// import React from 'react'

const ModalStartActivity = () => {
    return (
        <>
            <div className="container mx-auto font-poppins">
                <div className="flex flex-col justify-center ">
                    <div className="flex flex-col form-control mt-6 w-full items-center ">
                        <button className="btn bg-[#D2FE71] text-xl font-normal text-[#000000]" onClick={() => document.getElementById('my_modal_1').showModal()}>
                            <span class="material-symbols-outlined text-[#000000]">
                                add_circle
                            </span>
                            Add Activity
                        </button>
                    </div>
                </div>
            </div >
            <dialog id="my_modal_1" className="modal justify-center">
                <div className="modal-box p-[40px]">
                    <img className="mx-auto" src="./modal-start-activity.png" alt="" />
                    <p className="py-4 font-poppins text-base font-normal text-center">Congratulations,
                        you have finished Walking!</p>
                    <div className="flex flex-col form-control mt-6 w-full items-center ">
                        <span class="material-symbols-outlined text-[#000000] text-5xl">
                            directions_walk
                        </span>
                        <div className="flex md:justify-between gap-x-1.5">
                            <p className="py-4 font-poppins font-medium text-center w-1/2">Time</p>
                            <p className="py-4 font-poppins font-medium text-center w-1/2">1:30:00</p>
                        </div>
                        <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000] mt-4">
                            <span className="material-symbols-outlined text-[#000000]">
                                arrow_back
                            </span>
                            Back to Home
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default ModalStartActivity