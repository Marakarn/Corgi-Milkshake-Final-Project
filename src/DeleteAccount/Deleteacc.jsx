// import React from 'react'
import { Link } from "react-router-dom";
import Daisytop from "../components/Daisytop";
import Layout from "../components/Layout";
import Boxfirstname from "./Boxfirstname";
import Boxlastname from "./Boxlastname";
import Boxemail from "./Boxemail";
import { useEffect, useState } from "react";
import axios from "axios";

const Deleteacc = () => {

  const [userData, setUserData] = useState([]);
  const [reload, setReload] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));
  const firstname = userData.signup_firstname;
  const lastname = userData.signup_lastname;
  const email = userData.login_email;
  const id = token.id._id;

  useEffect(()=> {

    const getUserData = async () => {
      const response = await axios.get(
        `https://greensculpt.onrender.com/user-data/${id}`
        // `http://localhost:3000/user-data/${id}`
      );
      setUserData(response.data);
    };

    getUserData();

  }, [reload]);

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
