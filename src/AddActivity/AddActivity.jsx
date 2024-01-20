// import React from 'react'
import Layout from "../components/Layout";
import ModalAddActivity from "../components/ModalAddActivity";
import Daisytop from "../components/Daisytop";
import Activityname from "./Activityname";
import Activitydescription from "./Activitydescription";
import Activitiestypes from "./Activitiestypes";
import Activityduration from "./Activityduration";
import Activiydate from "./Activiydate";
import Activityimage from "./Activityimage";
const AddActivity = () => {
  return (
    <>
      <Layout>
        <div className="">
          <div className="flex flex-col justify-center min-h-[1080px] md:min-h-[800px]">
            <Daisytop text="Add Activity" path="/home" />
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <form className="card-body">
                  <Activityname />
                  <Activitydescription />
                  <Activitiestypes />
                </form>
              </div>

              <div className="w-full md:w-1/2">
                <form className="p-[32px] pt-0 md:pt-[32px]">
                  <Activityduration />
                  <Activiydate />
                  <Activityimage />
                </form>
              </div>
            </div>
            <ModalAddActivity />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AddActivity;
