import React from "react";
import blank from "../../assets/blank.png";
const Blank = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center ">
        <img className="" src={blank} alt="" />
      </div>

      <h1 className="text-center font-bold text-4xl text-gray-800 ">
        Everything looks empty here!
      </h1>
    </div>
  );
};

export default Blank;
