import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Headerhome from "./headerhome";
import Tiltebutton from "./Tiltebutton";
import Cardactivity from "./Cardactivity";
import axios from "axios";

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [reload, setReload] = useState(false);
  // useEffect(() => {
  //   setMockdata(mockData);
  // }, []);
  useEffect(()=> {
    const getData = async () => {
      const response = await axios.get(
        "https://greensculpt.onrender.com/add-activity"
      );
      setActivities(response.data);
    };

    getData();
  }, [reload]);

  return (
    <>
      <Layout>
        <div className="md:min-h-[800px] pb-48 md:pb-40">
          <div className="flex flex-col justify-center ">
            <Headerhome />
            {/* part 2: this button need to link to form*/}
            <div className="flex justify-center mt-10">
              <Link
                to="/add-activity"
                className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000] w-full md:w-1/2"
              >
                <span className="material-symbols-outlined text-[#000000]">
                  add_circle
                </span>
                Add Activity
              </Link>
            </div>

            <Tiltebutton />

            <Cardactivity activities={activities} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
