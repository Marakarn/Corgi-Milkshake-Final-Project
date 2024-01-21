// import React from 'react'
import { Link } from 'react-router-dom'
import DaisyDelete from './components/DaisyDelete'
import Layout from './Layout'

const Deleteacc = () => {
  return (
    <Layout>
    <div>
    <DaisyDelete/>
    
    <div class="">
    <div className="container mx-auto flex flex-col justify-center p-10 md:p-48 md:pt-10 ">
          {/* Box first name */}
          
          <div className="flex items-center justify-between">
              <div>
                <label className="from-control items-center ">First Name</label>
                <input
                  type="text"
                  className="form-control items-center focus:outline-none "
                  placeholder="Frist Name"
                />
              </div>
              <div className="">
                <span class="material-symbols-outlined text-[#8bca00]">edit_square</span>
              </div>
            </div>
            <hr className="border-y-[#8BCA00] mt-[5px]"></hr>
            
            
            {/* box last name */}
            <div className="flex items-center justify-between">
              <div>
                <label className="">Last Name</label>
                <input
                  type="text"
                  className="form-control items-center focus:outline-none  "
                  placeholder="Last Name"
                />
              </div>
              <div className="">
                <span class="material-symbols-outlined text-[#8bca00]">edit_square</span>
              </div>
            </div>
            <hr className="border-y-[#8BCA00] mt-[5px]"></hr>

            {/* box Email */}
            <div className="flex items-center justify-between">
              <div>
                <label className="">Email Address</label>
                <input
                  type="text"
                  className="form-control flex items-center focus:outline-none "
                  placeholder="Email"
                />
              </div>
              <div className="">
                <span class="material-symbols-outlined text-[#8bca00]">edit_square</span>
              </div>
            </div>
            <hr className="border-y-[#8BCA00] mt-[5px]"></hr>

            {/* buton change */}
            <Link to="/delete-account">
            <div className="flex flex-row w-full justify-center">
              <button className="m-20 btn text-xl text-white border-2 bg-red-600  h-10 w-[300px] rounded-xl ">
                Delete
                <span class="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            </Link>
          </div>
        </div>
    </div>
    </Layout>
  )
}

export default Deleteacc