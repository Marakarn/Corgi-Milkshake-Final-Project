import React from "react";
import { Link } from "react-router-dom";

const Cardactivity = ({ mockData }) => {
  return (
    <>
      {mockData.map((mockCardData) => (
        <div className="flex justify-center">
          <Link
            to={`/your-activity/${mockCardData.id}`}
            className="bg-base-100 shadow-xl w-full md:w-1/2 mt-9 border-2 border-[#8BCA00] rounded-[10px] p-4"
          >
            <div className="">
              <div className="flex flex-row lg:flex-row justify-between items-center">
                <div className="flex flex-row">
                  <span class="material-symbols-outlined text-[#000000] text-4xl">
                    {mockCardData.icon}
                  </span>
                  <div>
                    <h2 className="card-title text-2xl text-[#8BCA00]">
                      {mockCardData.name}
                    </h2>
                    <p className="text-base text-normal">
                      {mockCardData.description}
                    </p>
                    <p className="text-base text-normal">
                      {mockCardData.date} {mockCardData.duration}
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <button className="btn btn-circle bg-[#8BCA00]">
                    <span class="material-symbols-outlined text-[#FFFFFF]">
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

// const Cardactivity2 =({mockData}) => {
//     return (
//         <YourActivity mockData={mockData} />
//     )
// }

export default Cardactivity;