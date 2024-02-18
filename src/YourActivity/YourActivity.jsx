// import React from 'react'
import Layout from "../components/Layout";
import Daisytop from "../components/Daisytop";
import Btnstart from "./Btnstart";
import Btnedit from "./Btnedit";
import Btndeleteactivity from "./Btndeleteactivity";
import { useParams } from "react-router-dom";
import imageActivity from "/image-activity.png";
import axios from "axios";
import { useState, useEffect } from "react";

const YourActivity = () => {

  const { _id } = useParams();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getData = async () => {

      const response = await axios.get(
        `https://greensculpt.onrender.com/your-activity/${_id}`
        // `http://localhost:3000/your-activity/${_id}`
      );
      setActivities(response.data);
    };

    getData();
  }, [_id]);

  console.log(activities.actImage)
  
  return (
    <>
      <Layout>
        <div className="">
          <div className="flex flex-col justify-center pb-[80px] mb-20">
            <Daisytop text="Your Activity" />
            <div className="flex flex-col form-control mt-20 w-full items-center">
              <div className="card card-side bg-base-100 shadow-xl border-2 border-[#8BCA00]">
                <div className="p-3">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* hero-content */}
                    <div className="flex flex-row items-center md:pr-5">
                      <span className="material-symbols-outlined text-[#000000] text-4xl md:pr-3" id='card_icon'>
                        {activities.activityIcon}
                      </span>
                      <div className="w-72 overflow-hidden p-1">
                        <h2 className="card-title text-2xl text-[#8BCA00]">
                          {activities.activityName}
                        </h2>
                        <p className="text-base text-normal">
                          {activities.activityDes}
                        </p>
                        <p className="text-base text-normal">
                          {activities.date} {activities.hour}
                        </p>
                      </div>
                    </div>
                    {/* button start */}
                    <Btnstart activities={activities}/>
                  </div>
                  <img className="mx-auto mt-4 object-cover h-32 w-full" src={activities.actImage} alt="" />
                  <div className="flex justify-center md:justify-end pt-5 ">
                    <Btnedit />

                    <Btndeleteactivity />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default YourActivity;
