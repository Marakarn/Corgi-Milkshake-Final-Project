import React from 'react'
import { Link } from 'react-router-dom'

const Setpersonal = () => {
  return (
    <div>
        <Link to="/Personaldetail">
              <button className=" flex justify-center items-center w-72 h-40  p-auto border-2 shadow-md shadow-[#8bca00] m-auto text-[#8BCA00] text-[32px]">
                Personal Details
              </button>
            </Link>
    </div>
  )
}

export default Setpersonal