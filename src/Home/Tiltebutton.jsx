import React from "react";
import { Link } from "react-router-dom";

const Tiltebutton = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-between w-full md:w-1/2 items-center mt-5">
          <h1 className="text-xl font-medium ">Your Activity</h1>
          <Link to="/history">
            <button className="btn bg-[#000000] font-poppins text-xl font-normal text-[#FFFFFF] hidden md:flex">
              <span className="material-symbols-outlined text-[#FFFFFF]">
                history
              </span>
              History
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Tiltebutton;
