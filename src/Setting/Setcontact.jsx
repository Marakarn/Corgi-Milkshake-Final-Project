import React from 'react'
import { Link } from 'react-router-dom'

const Setcontact = () => {
  return (
    <div>
         <Link to="/contact-us">
              <button className=" flex justify-center items-center w-72 h-40  p-auto border-2 m-auto text-[#8BCA00] shadow-md shadow-[#8bca00] text-[32px]">
                Contact Us
              </button>
            </Link>
    </div>
  )
}

export default Setcontact