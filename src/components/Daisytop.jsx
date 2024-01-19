// import React from 'react'
import Backfunction from "./Backfunction"

const Daisytop = () => {
  return (
    <div>
    {/* <div className="container mx-auto font-poppins"> */}
      <div>
        <div className="flex flex-col justify-center ">
          <div className="w-full mt-[50px]">
            <div className="">
            <Backfunction path="/setting"/>
            </div>
            <h1 className="text-6xl font-semibold text-[#8BCA00] text-center">
              Personal Detail
            </h1>

            <hr className="border-y-[#8BCA00] w-full mt-[75px]"></hr>
          </div>
        </div>
      </div>
    </div>
  // </div>
  )
}

export default Daisytop