import React from "react";
import { Link } from "react-router-dom";

const Cardactivity = ({ activities }) => {
  //|| activity.status === "finish"
  const filteredActivities = activities.filter(activity => activity.status === "plan" || activity.status === "In_progress");
  const sortedActivities = filteredActivities.reverse().slice(0, 4);

  return (
    <>
      {sortedActivities.map(activity => (
        <div key={activity._id} className="flex justify-center">
          <Link
            to={`/your-activity/${activity._id}`}
            className="bg-base-100 shadow-xl w-full md:w-1/2 mt-9 border-2 border-[#8BCA00] rounded-[10px] p-4"
          >
            <div className="">
              <div className="flex flex-row lg:flex-row justify-between items-center">
                <div className="flex flex-row items-center w-5/6 overflow-hidden">
                  <span className="material-symbols-outlined text-[#000000] pr-3" id='card_icon'>
                    {activity.activityIcon}
                  </span>
                  <div className="">
                    <h2 className="card-title text-2xl text-[#8BCA00]">
                      {activity.activityName}
                    </h2>
                    <p className="text-base text-normal">
                      {activity.activityDes}
                    </p>
                    <p className="text-base text-normal">
                      Date: {activity.date}, {activity.hours} Hr {activity.minutes} m
                    </p>
                  </div>
                </div>
                <div className="flex justify-end w-1/6">
                  {activity.status === "plan" ? (
                    <button className="btn btn-circle bg-[#8BCA00]">
                      <span className="material-symbols-outlined text-[#FFFFFF]">
                        play_arrow
                      </span>
                    </button>
                  ) : activity.status === "In_progress" ? (
                    // Render different button for "In_progress" status
                    <button className="btn btn-circle bg-[#8BCA00]">
                      <span className="material-symbols-outlined text-[#FFFFFF]">
                        pause
                      </span>
                    </button>
                  ) : (
                    // Render different button for "finish" status
                    <button className="btn btn-circle bg-[#8BCA00]">
                      <span className="material-symbols-outlined text-[#FFFFFF]">
                      done
                      </span>
                    </button>
                  )}
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

