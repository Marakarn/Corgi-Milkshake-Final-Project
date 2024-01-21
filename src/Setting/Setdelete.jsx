import React from 'react'
import { Link } from 'react-router-dom'

const Setdelete = () => {
  return (
    <div>
          <Link to="/delete-acc">
              <button className=" flex justify-center items-center w-72 h-40  p-auto border-2 m-auto text-[#8BCA00] shadow-md shadow-[#8bca00] text-[32px]">
                Delete Account
              </button>
            </Link>
    </div>
  )
}

export default Setdelete