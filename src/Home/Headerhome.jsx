import React from "react";

const Headerhome = ({firstname}) => {
  return (
    <>
      <div className="w-full mt-[50px]">
        <div className="flex items-center">
          <img className="mt-4" src="./image-user.png" alt="" />
          <div className="p-5 md:p-10">
            <h1 className="text-xl md:text-3xl font-normal">Welcome back,</h1>
            <h1 className="text-2xl md:text-5xl font-semibold">
              Hello, {firstname}
            </h1>
          </div>
        </div>
        <hr className="border-y-[#8BCA00] w-full mt-[40px]"></hr>
      </div>
    </>
  );
};

export default Headerhome;
