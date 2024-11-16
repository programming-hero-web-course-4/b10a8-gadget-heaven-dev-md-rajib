import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { DataContext } from "../../App";
import MegaItem from "../MegaItem/MegaItem";

const MegaSale = () => {
  const {
    products,
    updateProducts,
    wishList,
    updateWishList,
    cart,
    updateCart,
  } = useContext(DataContext);

  return (
    <div>
      <div className="bg-[#9538E2] px-2 pb-6 pt-8">
        <h1 className="text-3xl text-white font-bold text-center">
          Mega Sale{" "}
          <span className="text-red-600 bg-yellow-400 rounded-full p-2">
            OFFER
          </span>{" "}
          going on!!!
        </h1>

        <p className="text-center text-white mt-6 w-[60%] mx-auto">
          Buy your favorite products upto 60% off sale! Time offer will continue
          for a limited time. Grab the bests for yourself. Miss it, regret on!
        </p>
      </div>

      <div className="pt-10 grid grid-cols-4 gap-6 bg-[#232b56fb] px-5 pb-5">
        {products
          .filter((cur) => cur.prev_price)
          .map((product) => {
            return <MegaItem product={product}></MegaItem>;
          })}
      </div>
    </div>
  );
};

export default MegaSale;
