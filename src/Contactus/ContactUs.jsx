// import React from "react";
import Daisytop from "../components/Daisytop";
import Layout from "../components/Layout";
import Pn from "./Pn";
import Mail from "./Mail";
import Address from "./Address";
import Report from "./Report";
import Img from "./Img";

const ContactUs = () => {
  return (
    <Layout>
      <div>
        <Daisytop text="Contact Us" path="/setting" />
        <div className="min-h-[600px]">
          <div className=" mt-10 flex-grow card place-items-center w-full justify-center font-poppins min-w-[310] ">
            <div className=" flex flex-col h-10 w-[320px] ">
              <Pn />
              <Mail />
              <Address />
              <Report />
              <Img />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
