// import React from 'react'
import { useState } from "react";
import Layout from "../components/Layout";
import Backfunction from "../components/Backfunction";
import DisplayPlan from "./Plan";
import DisplayInProgress from "./Hisinprogress";
import DisplayFinish from "./Hisfinish";

const History = () => {
  const handleClick = (value) => {
    setSection(value);
  };

  const [section, setSection] = useState("InProgress");

  return (
    <>
      <Layout>
        <div className="min-h-[800px]">
          <div className="flex flex-col justify-center ">
            <div className="w-full mt-[50px]">
              <div className="">
                <Backfunction path="/home" />
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
                <Display className="w-full" section={section} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

function Display({ section }) {
  let show;
  if (section === "Plan") {
    show = <DisplayPlan />;
  } else if (section === "InProgress") {
    show = <DisplayInProgress />;
  } else if (section === "Finish") {
    show = <DisplayFinish />;
  }

  return <div>{show}</div>;
}

export default History;
