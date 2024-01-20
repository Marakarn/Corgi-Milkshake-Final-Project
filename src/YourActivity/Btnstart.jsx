import React from "react";
import { Link } from "react-router-dom";
const Btnstart = () => {
  return (
    <div>
      <Link to="/start-activity">
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
