import React from "react";
import { Link } from "react-router-dom";

const Book = ({ product }) => {
  const { product_id, product_title, price, product_image } = product;
  return (
    <div className="card  card-compact bg-base-100 p-5 gap-5">
      <figure className=" h-[205px]">
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
        <p className="text-xl text-[#09080F99] font-medium">Price: {price}k</p>
        <div className="card-actions justify-start ">
          <Link
            to={`product/details/${product_id}`}
            className="btn btn-outline w-[130px] btn-primary text-[#9538E2] border-[#9538E2] rounded-3xl font-semibold">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
