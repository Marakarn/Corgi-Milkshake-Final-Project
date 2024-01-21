// import React from 'react'
import Layout from "../components/Layout";
import Backfunction from "../components/Backfunction";
import Daisytop from "../components/Daisytop";
import Plan from "./Plan";
import Hisinprogress from "./Hisinprogress";
import Hisfinish from "./Hisfinish";

const History = () => {
  return (
    <>
      <Layout>
        <div className="min-h-[800px]">
          <div className="flex flex-col justify-center ">
            <Daisytop text="History" path="/home" />
            <div className="flex ">
              <div className="block w-1/2 ">
                <form className="card-body">
                  <Plan />
                </form>
              </div>
              <Hisinprogress />
              <Hisfinish />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default History;
