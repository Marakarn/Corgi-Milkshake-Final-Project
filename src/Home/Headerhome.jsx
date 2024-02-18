import React from "react";
import SearchWeather from "./SearchWeather";

const Headerhome = ({firstname, avatar}) => {
  
  return (
    <>
      <div className="w-full mt-[50px]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex">
            <img className="mt-4 w-40 h-40 object-cover rounded-xl" src={avatar} alt="" />
            <div className="p-5 md:p-10">
              <h1 className="text-xl md:text-3xl font-normal">Welcome back,</h1>
              <h1 className="text-2xl md:text-5xl font-semibold">
                Hello, {firstname}
              </h1>
            </div>
          </div>
          <div className="mt-5 lg:mt-0 w-full md:w-4/5 lg:w-5/12 xl:w-1/3">
          <SearchWeather />
          </div>
        </div>
        <hr className="border-y-[#8BCA00] w-full mt-[40px]"></hr>
      </div>
    </>
  );
};

export default Headerhome;
