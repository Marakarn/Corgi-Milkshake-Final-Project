import React from 'react'

const Bfirstname = () => {
  return (
    <>
    <div className="flex flex-1 items-center justify-between">
                <div className="">
                  <label className="">First Name</label>
                  <input
                    type="text"
                    className="form-control items-center"
                    placeholder="First Name"
                  />
                </div>
                  <span class="material-symbols-outlined text-[#8bca00]">edit_square</span>
              </div>
              <hr className="border-y-[#8BCA00] mt-[5px]"></hr>
    </>
  )
}

export default Bfirstname