import React from "react";
import { NavLink } from "react-router-dom";
const LeftNavigation: React.FC<any> = ({ setLeftNavigation }) => {
  return (
    <div className="w-[25%] h-[100%] absolute bg-white text-black flex flex-col ">
      <div className="mt-3 flex justify-between relative ">
        <div className="text-2xl">Left Navigation</div>
        <div
          className="text-2xl  bg-red-400 rounded-[80%] w-[30px] text-center absolute right-0 cursor-pointer"
          onClick={setLeftNavigation}
        >
          x
        </div>
      </div>
      <div className="mt-3">content-</div>
      <NavLink to="/singleblog/1" className="mt-3">
        Blogs
      </NavLink>
      <NavLink to="/quiz" className="mt-3">
        Quiz
      </NavLink>
    </div>
  );
};

export default LeftNavigation;
