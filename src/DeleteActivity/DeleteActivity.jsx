// import React from 'react'
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import ModalDeleteActivity from "../components/ModalDeleteActivity";
import Daisytop from "../components/Daisytop";
import { mockData } from "../mockData";
import { useParams } from "react-router-dom";
import deleateActivityPic from "/delete-activity.png"

const DeleteActivity = () => {

  const { id } = useParams();
  const data = mockData[id];

  return (
    <>
      <Layout>
        <div className="min-h-[980px]">
          <div className="flex flex-col justify-center ">
            <Daisytop text="Delete Activity" path={`/your-activity/${data.id}`} />
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
              <ModalDeleteActivity />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DeleteActivity;
