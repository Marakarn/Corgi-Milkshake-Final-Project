import React from "react";
import { Link } from "react-router-dom";

const Btnedit = () => {
  return (
    <div>
      <Link to="/edit-activity">
        <button className="btn bg-[#000000] font-poppins text-xl font-normal text-[#FFFFFF] ">
          <span class="material-symbols-outlined text-[#FFFFFF]">
            border_color
          </span>
          Edit Activity
        </button>
      </Link>
    </div>
  );
};

export default Btnedit;
