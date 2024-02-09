import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Btndeleteactivity = () => {

  const { _id } = useParams();

  return (
    <div>
      <Link to={`/delete-activity/${_id}`} state={{_id:_id}}>
        <button className="btn bg-[#E34850] font-poppins text-xl font-normal text-[#FFFFFF]">
          <span className="material-symbols-outlined text-[#FFFFFF]">delete</span>
          Delete
        </button>
      </Link>
    </div>
  );
};

export default Btndeleteactivity;
