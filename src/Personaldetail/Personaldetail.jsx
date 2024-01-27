// import React from "react";
// import Footer from "./Footer";
import Daisytop from "../components/Daisytop";
import Layout from "../components/Layout";
import Inputpic from "./Inputpic";
import Bfirstname from "./Bfirstname";
import Blastname from "./Blastname";
import Bmail from "./Bmail";
import Bc from "./Bc";

const Personaldetail = () => {
  return (
    <>
      <Layout>
        <Daisytop text="Personal Detail" path="/setting" />
        <div className="">
          <div class="flex flex-col md:flex-row min-h-[600px]">
            <Inputpic />
            <div class="min-h-[500px] md:w-1/2 p-10">
              <Bfirstname />
              <Blastname />
              <Bmail />
              <Bc />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Personaldetail;