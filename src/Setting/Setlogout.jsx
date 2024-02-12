import React from "react";
import { Link } from "react-router-dom";

const Setlogout = () => {
  return (
    <div>
      <Link to="/login">
        <button className="flex justify-center items-center w-72 h-40  p-auto border-2 m-auto text-[#8BCA00] shadow-md shadow-[#8bca00] text-[32px]" onClick={() => localStorage.removeItem("token")}>
          Log Out
        </button>
      </Link>
    </div>
  );
};

export default Setlogout;
