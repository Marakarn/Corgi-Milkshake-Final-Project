import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Btnedit = () => {
  const { _id } = useParams();

  return (
    <div>
      <Link to={`/edit-activity/${_id}`} state={{_id:_id}}>
        <button className="btn bg-[#000000] font-poppins text-xl font-normal text-[#FFFFFF] ">
          <span className="material-symbols-outlined text-[#FFFFFF]">
            border_color
          </span>
          Edit Activity
        </button>
      </Link>
    </div>
  );
};

export default Btnedit;
