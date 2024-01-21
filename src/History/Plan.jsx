import React from "react";

const Plan = () => {
  return (
    
      <div className="form-control mt-6">
        <button className="btn bg-[#BDBDBD] font-poppins text-xl font-normal text-[#FFFFFF]">
          Plan
        </button>

        <div className="card card-side bg-base-100 shadow-xl w-full mt-9 border-2 border-[#BDBDBD]">
          <div className="card-body p-1">
            <div className="hero-content flex-col lg:flex-row justify-between">
              <div className="flex flex-row">
                <span class="material-symbols-outlined text-[#000000] text-4xl">
                  directions_walk
                </span>

                <div>
                  <h2 className="card-title text-2xl text-[#BDBDBD]">
                    Walking alone
                  </h2>
                  <p className="text-base text-normal">Walking for exercise</p>
                  <p className="text-base text-normal">24/1/2024 (2 hr)</p>
                </div>
              </div>

              <div className="flex">
                <button className="btn btn-circle bg-[#BDBDBD]">
                  <span class="material-symbols-outlined text-[#FFFFFF]">
                    play_arrow
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Plan;
