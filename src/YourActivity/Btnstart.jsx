import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const Btnstart = ({activities}) => {
  const { _id } = useParams();

  return (
    <div>
      <Link to={`/start-activity/${_id}`} state={{_id:_id,activities:activities}}>
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
