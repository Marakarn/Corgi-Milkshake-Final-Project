// import React from 'react'
import { Link } from "react-router-dom";
import Daisytop from "../components/Daisytop";
import Layout from "../components/Layout";
import Boxfirstname from "./Boxfirstname";
import Boxlastname from "./Boxlastname";
import Boxemail from "./Boxemail";

const Deleteacc = () => {
  return (
    <Layout>
      <div>
        <Daisytop text="Delete Account" path="/setting" />

        <div className="">
          <div className="container mx-auto flex flex-col justify-center p-10 md:p-48 md:pt-10 ">
            <Boxfirstname />
            <Boxlastname />
            <Boxemail />

            {/* button change ต้องเอาไปทำเป็นทำ component*/}
            <Link to="/delete-account">
              <div className="flex flex-row w-full justify-center">
                <button className="m-20 btn text-xl text-white border-2 bg-red-600  h-10 w-[300px] rounded-xl ">
                  Delete
                  <span class="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Deleteacc;
