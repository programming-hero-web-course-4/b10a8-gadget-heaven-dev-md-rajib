import React, { useContext } from "react";
import { DataContext } from "../../App";
import WishlistProduct from "../WishlistProduct/WishlistProduct";

const WishListProducts = () => {
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
      <h1 className="text-[#0B0B0B] text-2xl font-bold text-left mt-6">
        WishList
      </h1>

      <div className="flex flex-col gap-4 pt-8">
        {wishList.map((current) => {
          return <WishlistProduct current={current}></WishlistProduct>;
        })}
      </div>
    </div>
  );
};

export default WishListProducts;
