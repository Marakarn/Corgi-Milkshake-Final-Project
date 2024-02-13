// import React from "react";
// import Footer from "./Footer";
import Daisytop from "../components/Daisytop";
import Layout from "../components/Layout";
import Inputpic from "./Inputpic";
import Bfirstname from "./Bfirstname";
import Blastname from "./Blastname";
import Bmail from "./Bmail";
import Bc from "./Bc";
import ModalEditPersonal from "../components/ModalEditPersonal";

const Personaldetail = () => {

  const token = JSON.parse(localStorage.getItem("token"));
  const firstname = token.id.signup_firstname;
  const lastname = token.id.signup_lastname;
  const email = token.id.login_email;

  return (
    <>
      <Layout>
        <Daisytop text="Personal Detail" />
        <div className="">
          <div className="flex flex-col md:flex-row min-h-[600px]">
            <Inputpic />
            <div className="min-h-[500px] md:w-1/2 p-10">
              <Bfirstname firstname={firstname} />
              <Blastname lastname={lastname} />
              <Bmail email={email} />
              {/* <Bc /> */}
            </div>
          </div>
        </div>
        {/* <ModalEditPersonal /> */}
      </Layout>
    </>
  );
};

export default Personaldetail;
