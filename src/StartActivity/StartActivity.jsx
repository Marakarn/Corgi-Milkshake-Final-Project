// import React from 'react'
import Layout from "../components/Layout";
import Daisytop from "../components/Daisytop";
import Startvideo from "./Startvideo";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const StartActivity = () => {
  // const [name, setName] = useState();
  // const [description, setDescription] = useState();
  // const [type, setType] = useState();
  // const [duration, setDuration] = useState();
  // const [date, setDate] = useState();
  // const [image, setImage] = useState();

  // const { _id } = useParams();
  let { state } = useLocation();
  const activity = state.activities

  console.log(activity)

  return (
    <>
      <Layout>
        <div className="min-h-[1080px] md:min-h-[800px]">
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

                    {/* ห้ามลบ running */}
                    {/* <div className="flex flex-col form-control mt-6 w-full items-center ">
                                        <span className="material-symbols-outlined text-[#000000] text-7xl">
                                            directions_run
                                        </span>

                                        <p className="text-2xl text-normal mt-4">Running</p>
                                    </div> */}

                    {/* ห้ามลบ weight-lifting */}
                    {/* <div className="flex flex-col form-control mt-6 w-full items-center ">
                                        <span className="material-symbols-outlined text-[#000000] text-7xl">
                                            exercise
                                        </span>

                                        <p className="text-2xl text-normal mt-4">Weight-lifting</p>
                                    </div> */}

                    {/* ห้ามลบ swimming */}
                    {/* <div className="flex flex-col form-control mt-6 w-full items-center ">
                                        <span className="material-symbols-outlined text-[#000000] text-7xl">
                                            pool
                                        </span>

                                        <p className="text-2xl text-normal mt-4">Swimming</p>
                                    </div> */}

                    {/* ห้ามลบ cycling */}
                    {/* <div className="flex flex-col form-control mt-6 w-full items-center ">
                                        <span className="material-symbols-outlined text-[#000000] text-7xl">
                                            directions_bike
                                        </span>

                                        <p className="text-2xl text-normal mt-4">Cycling</p>
                                    </div> */}

                    {/* ห้ามลบ aerobics */}
                    {/* <div className="flex flex-col form-control mt-6 w-full items-center ">
                                        <span className="material-symbols-outlined text-[#000000] text-7xl">
                                            sports_gymnastics
                                        </span>

                                        <p className="text-2xl text-normal mt-4">Aerobics</p>
                                    </div> */}

                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center mt-6">
                      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                          <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                      </div>
                      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                          <span style={{ "--value": 24 }}></span>
                        </span>
                        min
                      </div>
                      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                          <span style={{ "--value": 39 }}></span>
                        </span>
                        sec
                      </div>
                    </div>
                    <div className="flex flex-col form-control w-full items-center mt-16">
                      <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000]">
                        <span className="material-symbols-outlined text-[#000000]">
                          play_circle
                        </span>
                        Start
                      </button>
                    </div>

                    {/* ห้ามลบ stop button */}
                    {/* <div className="flex flex-col form-control mt-6 w-full items-center ">
                                        <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000]">
                                            <span className="material-symbols-outlined text-[#000000]">
                                                pause_circle
                                            </span>
                                            Pause
                                        </button>
                                    </div> */}
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
