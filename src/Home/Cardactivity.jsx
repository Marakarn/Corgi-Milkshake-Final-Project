import React from "react";
import { Link } from "react-router-dom";

const Cardactivity = ({ activities }) => {

  // const sortedActivities = activities.sort((a, b) => {
  //   return new Date(b.date) - new Date(a.date);
  // });
  const sortedActivities = activities.reverse().slice(0, 4);

  return (
    <>
      {sortedActivities.map((activities) => (
        <div key={activities._id} className="flex justify-center">
          <Link
            to={`/your-activity/${activities._id}`}
            className="bg-base-100 shadow-xl w-full md:w-1/2 mt-9 border-2 border-[#8BCA00] rounded-[10px] p-4"
          >
            <div className="">
              <div className="flex flex-row lg:flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                      <span className="material-symbols-outlined text-[#000000] pr-3" id='card_icon'>
                    {activities.activityIcon}
                  </span>
                  <div>
                    <h2 className="card-title text-2xl text-[#8BCA00]">
                      {activities.activityName}
                    </h2>
                    <p className="text-base text-normal">
                      {activities.activityDes}
                    </p>
                    <p className="text-base text-normal">
                      {activities.activityType}
                    </p>
                    <p className="text-base text-normal">
                      Date: {activities.date}, {activities.hours} Hr {activities.minutes} m
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <button className="btn btn-circle bg-[#8BCA00]">
                    <span className="material-symbols-outlined text-[#FFFFFF]">
                      play_arrow
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Cardactivity;
