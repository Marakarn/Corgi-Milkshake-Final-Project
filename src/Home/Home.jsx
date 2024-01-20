// import React from 'react'
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Headerhome from "./headerhome";
import Tiltebutton from "./Tiltebutton";
import Cardactivity from "./Cardactivity";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="md:min-h-[800px] pb-48 md:pb-20">
          <div className="flex flex-col justify-center ">
            <Headerhome />

            {/* part 2: this button need to link to form*/}
            <Link to="/add-activity">
              <div className="flex justify-center mt-10">
                <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000] w-full md:w-1/2">
                  <span class="material-symbols-outlined text-[#000000]">
                    add_circle
                  </span>
                  Add Activity
                </button>
              </div>
            </Link>

            <Tiltebutton />

            <Cardactivity />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
