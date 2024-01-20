// import React from "react";
// import Footer from "./Footer";
import Daisytop from "../components/Daisytop";
import Layout from "../components/Layout";

const ContactUs = () => {
  return (
    <Layout>
    <div>
      <Daisytop text='Contact Us' path ='/setting'/>
      <div className="min-h-[800px]">
        <div className=" mt-10 flex-grow card place-items-center w-full justify-center font-poppins min-w-[310] ">
          
          <div className=" flex flex-col h-10 w-[320px] ">  
          
            <div className="flex items-center gap-6">
                <span class="material-symbols-outlined size-2 text-[#8BCA00]">call</span>
                <p className="mt-5">+66894411198</p> 
            </div> 
            <hr className="border-y-[#8BCA00] mt-[5px]"></hr>

            <div className="flex items-center gap-6">
            <span class="material-symbols-outlined size-2 text-[#8BCA00]">mail</span>
            <p className="mt-5">GreenSculpt@jsd6.com</p> 
            </div> 
            <hr className="border-y-[#8BCA00] mt-[5px]"></hr>

            <div className="flex items-center gap-6">
            <span class="material-symbols-outlined size-2 text-[#8BCA00]">map</span>
            <p className="mt-5">55/55 Bangkok Thailand</p>
            </div>
            <hr className="border-y-[#8BCA00] mt-[5px]"></hr>

            <div className="flex items-center gap-6">
            <span class="material-symbols-outlined size-2 text-[#8BCA00]">lab_profile</span>
            <p className="mt-5">Report</p> 
            </div>
            <hr className="border-y-[#8BCA00] mt-[5px]"></hr>
            
          <img className="mt-10"
          src="./bro.png"
          />
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ContactUs;
