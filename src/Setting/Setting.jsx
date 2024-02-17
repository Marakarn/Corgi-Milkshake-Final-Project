// import React from "react";
// import Footer from "./Footer";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Backfunction from "../components/Backfunction";
import Daisytop from "../components/Daisytop";
import Setpersonal from "./Setpersonal";
import Setcontact from "./Setcontact";
import Setdelete from "./Setdelete";
import Setlogout from "./Setlogout";
import { useEffect } from "react";

const Setting = () => {

useEffect(() => {
    fetch('https://greensculpt.onrender.com/')
      .then(response => {
        console.log('Backend is up');
      })
      .catch(error => {
        console.error('Error pinging backend:', error);
      });
  }, []);

  return (
    <>
      <Layout>
        <div className="min-h-[1400px] md:min-h-[1080px]">
          <div>
            <Daisytop text="Setting" />

            {/* 4 boxs */}
            <div className="grid grid-cols-1 grid-rows-2 gap-[100px] justify-center items-center max-w-5xl mt-[100px] ml-auto mr-auto md:grid-cols-1 lg:grid-cols-2 md:p-10 w-full ">
              <Setpersonal />
              <Setcontact />
              <Setdelete />
              <Setlogout />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Setting;
