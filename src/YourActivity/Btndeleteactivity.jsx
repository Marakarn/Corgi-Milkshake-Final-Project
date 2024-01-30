import React from "react";
import { Link } from "react-router-dom";
import { mockData } from "../mockData";
import { useParams } from "react-router-dom";

const Btndeleteactivity = () => {

  const { id } = useParams();
  const data = mockData[id];

  return (
    <div>
      <Link to={`/delete-activity/${data.id}`}>
        <button className="btn bg-[#E34850] font-poppins text-xl font-normal text-[#FFFFFF] ">
          <span class="material-symbols-outlined text-[#FFFFFF]">delete</span>
          Delete
        </button>
      </Link>
    </div>
  );
};

export default Btndeleteactivity;
