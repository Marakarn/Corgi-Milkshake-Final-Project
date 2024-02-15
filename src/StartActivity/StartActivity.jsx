// import React from 'react'
import Layout from "../components/Layout";
import Daisytop from "../components/Daisytop";
import Startvideo from "./Startvideo";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import TimeApp from "./Timer/timeApp";

const StartActivity = () => {

  let { state } = useLocation();
  const activity = state.activities

  console.log(activity)

  return (
    <>
      <Layout>
        <div className="min-h-[1300px] md:min-h-[1000px]">
          <div className="flex flex-col justify-center">
            {/* {data.map((mockData) => ( */}
            <Daisytop
              text="Start Activity"
            />
            {/* ))} */}
            <div className="flex flex-col md:flex-row">
              <Startvideo />
              <div className="w-full md:w-1/2 ">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-3xl font-medium">
                        Timer
                      </span>
                    </label>

                    {/* ห้ามลบ walking */}
                    <div className="flex flex-col form-control mt-6 w-full items-center ">
                      <span className="material-symbols-outlined text-[#000000]" id="card_icon">
                      {activity.activityIcon}
                      </span>

                      <p className="text-2xl text-normal mt-4">{activity.activityType}</p>
                    </div>
                    <TimeApp activity={activity}/>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default StartActivity;
