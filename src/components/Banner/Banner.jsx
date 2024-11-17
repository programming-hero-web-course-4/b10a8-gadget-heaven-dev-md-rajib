import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../../assets/banner.jpg";
const Banner = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <div className="px-2 border-l border-r border-b pb-2 rounded-b-xl">
      <div className="bg-[#9538E2] pt-3 rounded-b-xl">
        <div>
          <h1 className="text-[40px] leading-[55px] text-white font-bold w-[70%] text-center mx-auto">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>

          <p className="text-white mt-5 w-[65%] text-center mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>

          <div onClick={handleClick} className="flex justify-center">
            <button className="box-border mt-8 rounded-3xl bg-white w-[168px] h-[56px] text-[#9538E2] hover:bg-[#9538E2] hover:text-white hover:border-white hover:border text-[20px] font-bold mb-8">
              Shop Now
            </button>
          </div>

          <div className="relative pb-[200px]">
            <div className="w-[70%] left-1/2 -translate-x-1/2 h-[450px] absolute  mx-auto rounded-[32px] p-4 border bg-[#ffffff3b]">
              <img
                className="h-full w-full rounded-3xl object-cover"
                src={bannerImage}
                alt="bannerImagImage of googles "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
