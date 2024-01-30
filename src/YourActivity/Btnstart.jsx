import React from "react";
import { Link } from "react-router-dom";
import { mockData } from "../mockData";
import { useParams } from "react-router-dom";


const Btnstart = () => {
  const { id } = useParams();
  const data = mockData[id];

  return (
    <div>
      <Link to={`/start-activity/${data.id}`}>
        <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000] ">
          <span className="material-symbols-outlined text-[#000000] ">
            play_circle
          </span>
          Start
        </button>
      </Link>
    </div>
  );
};

export default Btnstart;
