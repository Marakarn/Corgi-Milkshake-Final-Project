import React from 'react'

const Daisytop = () => {
  return (
    <div>
    <div className="container mx-auto font-poppins">
      <div>
        <div className="flex flex-col justify-center ">
          <div className="w-full mt-[120px]">
            <div className="">
              <button className="btn bg-[#D2FE71] text-xl font-normal text-[#000000]">
                <span className="material-symbols-outlined text-[#000000]">
                  arrow_back
                </span>
                <a href="/">Back</a>
              </button>
            </div>
            <h1 className="text-6xl font-semibold text-[#8BCA00] text-center">
              Personal Detail
            </h1>

            <hr className="border-y-[#8BCA00] w-full mt-[75px]"></hr>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Daisytop