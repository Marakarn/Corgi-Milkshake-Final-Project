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
  const avatar = token.id.signup_photo;

  return (
    <>
      <Layout>
        <Daisytop text="Personal Detail" />
        <div className="min-h-[1000px] md:min-h-[600px]">
          <div className="flex flex-col md:flex-row">
            <Inputpic avatar={avatar} />
            <div className="min-h-[300px] md:w-1/2 p-10">
              <Bfirstname firstname={firstname} />
              <Blastname lastname={lastname} />
              <Bmail email={email} />
              {/* <Bc /> */}
            </div>
          </div>
          <div className="w-full flex justify-center">
          <button className="btn text-xl text-[#8BCA00] border-2 border-[#8bca00] h-10 mt-10 w-60 rounded-xl bg-white ">
            Change Profile
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        </div>
        {/* <ModalEditPersonal /> */}

      </Layout>
    </>
  );
};

export default Personaldetail;
