// import React from 'react'
import Layout from "./Layout"
import Backfunction from "./components/Backfunction"
import { Link } from "react-router-dom"
import ModalEditActivity from "./components/ModalEditActivity"


const EditActivity = () => {
    return (
        <>
        <Layout>
            <div className="">
                <div className="flex flex-col justify-center min-h-[1080px] md:min-h-[800px]">
                    <div className="w-full">
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
                            Edit Activity
                        </h1>
                        <hr className="border-y-[#8BCA00] w-full mt-[75px]" ></hr>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base font-medium">Activity Name* :</span>
                                    </label>
                                    <input type="text" placeholder="Activity Name" className="input input-bordered text-base font-normal" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base font-medium">Activity Description :</span>
                                    </label>
                                    <textarea placeholder="Activity Description" className="textarea textarea-bordered textarea-lg w-full text-base font-normal" ></textarea>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-base font-medium">Activity Types* :</span>
                                    </label>
                                    <select className="select select-bordered w-full text-base font-normal">
                                        <option disabled selected>Choose</option>
                                        <option>Walking</option>
                                        <option>Running</option>
                                        <option>Weight-lifting</option>
                                        <option>Swimming</option>
                                        <option>Cycling</option>
                                        <option>Aerobics</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="w-full md:w-1/2">
                            <form className="p-[32px] pt-0 md:pt-[32px]">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base font-medium">Activity duration* :</span>
                                    </label>
                                    <div className="flex md:justify-between gap-x-1.5">
                                        <input type="number" id="hours" name="hours" min="0" placeholder="hours" className="input input-bordered text-base font-normal w-1/2" required />
                                        <input type="number" id="minutes" name="minutes" min="0" max="59" placeholder="minutes" className="input input-bordered text-base font-normal w-1/2" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base font-medium">Date* :</span>
                                    </label>
                                    <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base font-medium">Image :</span>
                                    </label>
                                    <input type="file" className="file-input file-input-bordered w-full max-w-x" />
                                </div>
                            </form>
                        </div>
                    </div>

                   {/* <Link to="/modal-edit-activity">
                    <div className="flex flex-col form-control mt-6 w-full items-center ">
                        <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000]">
                            <span class="material-symbols-outlined text-[#000000]">
                                add_circle
                            </span>
                            Save
                        </button>
                    </div>
                    </Link> */}
                    <ModalEditActivity/>
                </div>
            </div >
            </Layout>
        </>
    )
}

export default EditActivity