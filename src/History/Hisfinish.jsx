import React from "react";
import { Link } from "react-router-dom";

const Hisfinish = ({activities}) => {
  return (
    <>
      <div className="">
        <div key={activities._id} className="flex justify-center">
          <Link
            to={`/your-activity/${activities._id}`}
            className="bg-base-100 shadow-xl w-full md:w-1/2 mt-9 border-2 border-[#8BCA00] rounded-[10px] p-4 text-wrap"
          >
            <div className="">
              <div className="flex flex-row lg:flex-row justify-between items-center">
                <div className="flex flex-row items-center overflow-hidden w-5/6 text-wrap">
                      <span className="material-symbols-outlined text-[#000000] pr-3" id='card_icon'>
                    {activities.activityIcon}
                  </span>
                  <div>
                    <h2 className="font-semibold text-2xl text-[#8BCA00] text-wrap">
                      {activities.activityName}
                    </h2>
                    <p className="text-base text-normal">
                      {activities.activityDes}
                    </p>
                    <p className="text-base text-normal">
                      Date: {activities.date}, {activities.hours} Hr {activities.minutes} m
                    </p>
                  </div>
                </div>

                <div className="flex justify-end w-1/6">
                  <button className="btn btn-circle bg-[#8BCA00]">
                    <span className="material-symbols-outlined text-[#FFFFFF]">
                      check
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hisfinish;
