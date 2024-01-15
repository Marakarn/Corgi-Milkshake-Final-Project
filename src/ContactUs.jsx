import React from "react";
import Footer from "./Footer";
import Daisycontact from "./Daisycontact";

const ContactUs = () => {
  return (
    <div>
      <Daisycontact />
      <div>
        <div class=" mt-36 flex-grow card place-items-center w-full justify-center font-poppins min-w-[310] ">
          
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
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
