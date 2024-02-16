// import React from 'react'
import { useState,useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import Backfunction from "../components/Backfunction";
import DisplayPlan from "./Plan";
import DisplayInProgress from "./Hisinprogress";
import DisplayFinish from "./Hisfinish";

const History = () => {

  const token = JSON.parse(localStorage.getItem("token"));
  const id = token.id._id;
  
  const handleClick = (value) => {
    setSection(value);
  };

  const [section, setSection] = useState("Plan");
  const [activities, setActivities] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(()=> {
    const getData = async () => {
      const response = await axios.get(
        `https://greensculpt.onrender.com/add-activity/${id}`
        // `http://localhost:3000/add-activity/${id}`
      );
      setActivities(response.data);
    };

    getData();
  }, [reload]);

  return (
    <>
      <Layout>
        <div className="">
          <div className="flex flex-col justify-center mb-40">
            <div className="w-full mt-[50px]">
              <div className="">
                <Backfunction />
              </div>
              <h1 className="text-6xl font-semibold text-[#8BCA00]  text-center">
                History
              </h1>
              <hr className="border-y-[#8BCA00] w-full mt-[75px]"></hr>
            </div>

            <div className="flex">
              <div className="flex flex-col flex-1 ">
                <div className="flex gap-2 mt-3 justify-center">
                  <button
                    className="btn bg-[#8BCA00] w-1/3 h-16 md:h-10 font-poppins text-lg md:text-xl font-normal text-[#FFFFFF]"
                    onClick={() => handleClick("Plan")}
                  >
                    Plan
                  </button>

                  <button
                    className="btn bg-[#8BCA00] w-1/3 h-16 md:h-10 font-poppins text-lg md:text-xl font-normal text-[#FFFFFF]"
                    onClick={() => handleClick("InProgress")}
                  >
                    In progress
                  </button>

                  <button
                    className="btn bg-[#8BCA00] w-1/3 h-16 md:h-10 font-poppins text-lg md:text-xl font-normal text-[#FFFFFF]"
                    onClick={() => handleClick("Finish")}
                  >
                    Finish
                  </button>
                </div>
                  <Display className="w-full h-full" section={section} activities={activities} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

function Display({ section, activities }) {
  let filteredActivities = [];

  if (section === "Plan") {
    filteredActivities = activities.filter(activities => activities.status === "plan");
  } else if (section === "InProgress") {
    filteredActivities = activities.filter(activities => activities.status === "In_progress");
  } else if (section === "Finish") {
    filteredActivities = activities.filter(activities => activities.status === "finish");
  }

  return (
    <div>
      {filteredActivities.map(activities => {
        switch (section) {
          case "Plan":
            return <DisplayPlan key={activities._id} activities={activities} />;
          case "InProgress":
            return <DisplayInProgress key={activities._id} activities={activities} />;
          case "Finish":
            return <DisplayFinish key={activities._id} activities={activities} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

export default History;