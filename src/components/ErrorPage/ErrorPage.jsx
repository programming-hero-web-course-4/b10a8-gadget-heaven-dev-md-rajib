import React from "react";
import { useNavigate } from "react-router-dom";
import errorImage from "../../assets/error.png";
const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("");
  };

  return (
    <div onClick={handleClick} className=" mx-auto">
      <div className="rounded-full h-screen mt-[-8px]">
        <img className="h-full w-full" src={errorImage} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
