import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MegaItem = ({ product }) => {
  const { product_id, product_title, price, prev_price, product_image } =
    product;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product-details/${product_id}`);
  };
  return (
    <div className="card card-compact bg-yellow-300 p-5 gap-5">
      <figure className="h-[205px]">
        <img
          className="rounded-xl w-full h-full object-cover"
          src={product_image}
          alt="Shoes"
        />
      </figure>
      <div className=" p-0 flex flex-col gap-5">
        <h2 className="card-title text-[#09080F] text-2xl font-semibold">
          {product_title}
        </h2>
        <div className="flex gap-4">
          <p className="text-xl text-[#09080F99] text-red-600 font-medium line-through">
            Price:
            <br /> {prev_price}k
          </p>
          <p className="text-green-600 font-medium text-xl ">
            Price:
            <br /> {price}k
          </p>
        </div>
        <div className="card-actions justify-start ">
          <Link
            onClick={handleClick}
            className="btn btn-outline w-[130px] btn-primary text-[#9538E2] border-[#9538E2] rounded-3xl font-semibold">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MegaItem;
