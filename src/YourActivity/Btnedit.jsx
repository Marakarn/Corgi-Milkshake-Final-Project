import React from "react";
import { Link } from "react-router-dom";
import { mockData } from "../mockData";
import { useParams } from "react-router-dom";

const Btnedit = () => {
  const { id } = useParams();
  const data = mockData[id];

  return (
    <div>
      <Link to={`/edit-activity/${data.id}`}>
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
