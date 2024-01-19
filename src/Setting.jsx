// import React from "react";
// import Footer from "./Footer";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import Backfunction from "./components/Backfunction";

const Setting = () => {
  return (
    <>
    <Layout>
      <div className="min-h-[1400px] md:min-h-[1080px]">
        <div>
          <div className="flex flex-col justify-center ">
            <div className="w-full mt-[50px]">
              <div className="">
                {/* <button className="btn bg-[#D2FE71] text-xl font-normal text-[#000000] hidden md:flex">
                  <span className="material-symbols-outlined text-[#000000]">
                    arrow_back
                  </span>
                  Back
                </button> */}
                <Backfunction path="/home"/>
              </div>
              <h1 className="text-6xl font-semibold text-[#8BCA00] text-center">
                Settings
              </h1>

              <hr className="border-y-[#8BCA00] w-full mt-[75px]"></hr>
            </div>
          </div>
          {/* 4 boxs */}
          <div className="grid grid-cols-1 grid-rows-2 gap-[100px] justify-center items-center max-w-5xl mt-[100px] ml-auto mr-auto md:grid-cols-1 lg:grid-cols-2 md:p-10 w-full ">
          <Link to="/Personaldetail">
              <button className=" flex justify-center items-center w-72 h-40  p-auto border-2 shadow-md shadow-[#8bca00] m-auto text-[#8BCA00] text-[32px]">
                Personal Details
              </button>
            </Link>
            
            <Link to="/contact-us">
              <button className=" flex justify-center items-center w-72 h-40  p-auto border-2 m-auto text-[#8BCA00] shadow-md shadow-[#8bca00] text-[32px]">
                Contact Us
              </button>
            </Link>
            
            <Link to="/delete-acc">
              <button className=" flex justify-center items-center w-72 h-40  p-auto border-2 m-auto text-[#8BCA00] shadow-md shadow-[#8bca00] text-[32px]">
                Delete Account
              </button>
            </Link>

            <Link to="/login">
            <button class="flex justify-center items-center w-72 h-40  p-auto border-2 m-auto text-[#8BCA00] shadow-md shadow-[#8bca00] text-[32px]">
              Log Out
            </button>
            </Link>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default Setting;
