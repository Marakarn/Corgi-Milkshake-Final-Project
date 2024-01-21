import React from "react";
import { Link } from "react-router-dom";

const Btndeleteactivity = () => {
  return (
    <div>
      <Link to="/delete-activity">
        <button className="btn bg-[#E34850] font-poppins text-xl font-normal text-[#FFFFFF] ">
          <span class="material-symbols-outlined text-[#FFFFFF]">delete</span>
          Delete
        </button>
      </Link>
    </div>
  );
};

export default Btndeleteactivity;
