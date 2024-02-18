import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Headerhome from "./Headerhome";
import Tiltebutton from "./Tiltebutton";
import Cardactivity from "./Cardactivity";
import axios from "axios";

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [userData, setUserData] = useState([]);
  const [reload, setReload] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));
  // const firstname = token.id.signup_firstname;
  const firstname = userData.signup_firstname;
  const avatar = userData.signup_photo;
  const id = token.id._id;

  // console.log(JSON.parse(token));
  // console.log(firstname);
  // console.log(userData)

  useEffect(() => {
    fetch('https://greensculpt.onrender.com/')
      .then(response => {
        console.log('Backend is up');
      })
      .catch(error => {
        console.error('Error pinging backend:', error);
      });
  }, []);

  useEffect(()=> {
    const getData = async () => {
      const response = await axios.get(
        `https://greensculpt.onrender.com/add-activity/${id}`
        // `http://localhost:3000/add-activity/${id}`
      );
      setActivities(response.data);
    };

    getData();

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
    <>
      <Layout>
        <div className="md:min-h-[800px] pb-48 md:pb-40">
          <div className="flex flex-col justify-center ">
            <Headerhome firstname={firstname} avatar={avatar}/>
            {/* part 2: this button need to link to form*/}
            <div className="flex justify-center mt-10">
              <Link
                to="/add-activity"
                className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000] w-full md:w-1/2"
              >
                <span className="material-symbols-outlined text-[#000000]">
                  add_circle
                </span>
                Add Activity
              </Link>
            </div>

            <Tiltebutton />

            <Cardactivity activities={activities} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
