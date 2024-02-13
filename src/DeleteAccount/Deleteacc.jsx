// import React from 'react'
import { Link } from "react-router-dom";
import Daisytop from "../components/Daisytop";
import Layout from "../components/Layout";
import Boxfirstname from "./Boxfirstname";
import Boxlastname from "./Boxlastname";
import Boxemail from "./Boxemail";

const Deleteacc = () => {

  const token = JSON.parse(localStorage.getItem("token"));
  const firstname = token.id.signup_firstname;
  const lastname = token.id.signup_lastname;
  const email = token.id.login_email;

  return (
    <Layout>
      <div>
        <Daisytop text="Delete Account" path="/setting" />

        <div className="">
          <div className="container mx-auto flex flex-col justify-center p-10 md:p-48 md:pt-10 ">
            <Boxfirstname firstname={firstname} />
            <Boxlastname lastname={lastname} />
            <Boxemail email={email} />

            {/* button change ต้องเอาไปทำเป็นทำ component*/}
            <Link to="/delete-account">
              <div className="flex flex-row w-full justify-center">
                <button className="m-20 btn text-xl text-white border-2 bg-red-600  h-10 w-[300px] rounded-xl ">
                  <span className="material-symbols-outlined text-[#FFFFFF]">
                    delete
                  </span>
                  Delete
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Deleteacc;
