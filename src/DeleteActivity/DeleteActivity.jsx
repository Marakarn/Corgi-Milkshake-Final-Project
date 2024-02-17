// import React from 'react'
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import ModalDeleteActivity from "../components/ModalDeleteActivity";
import Daisytop from "../components/Daisytop";
import { useParams } from "react-router-dom";
import deleateActivityPic from "/delete-activity.png"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DeleteActivity = () => {

  let { state } = useLocation();
  const { _id } = useParams();
  console.log(state._id)
  console.log(_id)

  return (
    <>
      <Layout>
        <div className="h-[1080px] md:min-h-[980px]">
          <div className="flex flex-col justify-center ">
            <Daisytop text="Delete Activity" />
            <div className="flex flex-col form-control mt-6 w-full items-center ">
              <form className="card-body">
                <div className="form-control">
                  <img
                    className="mx-auto p-6"
                    src={deleateActivityPic}
                    alt=""
                  />
                  <h1 className="text-4xl font-bold text-[#E34850] text-center p-6">
                    Do you want to delete activity?
                  </h1>
                  <p className="text-xl font-normal text-center">
                    If you delete your activity the system will delete all data.
                  </p>
                </div>
              </form>
              <ModalDeleteActivity _id={state._id} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DeleteActivity;
