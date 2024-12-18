import React, { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import {
  retrieveCartData,
  retrieveWishListData,
} from "../../utlitlies/localStorageDB";
import CartProducts from "../CartProducts/CartProducts";
import WishListProducts from "../WishListProducts/WishListProducts";

const Dashboard = () => {
  const [cartSelected, updateSelected] = useState(1);

  const [cartDataIds, updateCartDataIds] = useState([]);
  const [wishlistDataIds, updateWishlistDataIds] = useState([]);

  useEffect(() => {
    const data = retrieveCartData();
    updateCartDataIds(data);

    const data2 = retrieveWishListData();
    updateWishlistDataIds(data2);
  }, []);

  return (
    <div className="w-[90%] mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gadget Heaven | Dashboard</title>
      </Helmet>
      <div className="bg-[#9538E2] py-8">
        <h1 className="text-white text-3xl font-bold text-center">Dashboard</h1>
        <p className="text-white w-[60%] text-center mx-auto mt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>

        <div className="text-center flex justify-center gap-4 mt-6">
          <button
            onClick={() => updateSelected(1)}
            className={`h-[48px] w-[160px] text-[18px] rounded-[32px] ${
              cartSelected
                ? "bg-white text-[#9538E2] text-[18px] font-extrabold"
                : "border border-white text-white"
            }`}>
            Cart
          </button>
          <button
            onClick={() => updateSelected(0)}
            className={`h-[48px] w-[160px] text-[18px] rounded-[32px] ${
              !cartSelected
                ? "bg-white text-[#9538E2]  font-extrabold"
                : "border border-white text-white "
            }`}>
            Wishlist
          </button>
        </div>
      </div>

      {cartSelected ? (
        <CartProducts
          updateCartDataIds={updateCartDataIds}
          cartDataIds={cartDataIds}></CartProducts>
      ) : (
        <WishListProducts
          wishlistDataIds={wishlistDataIds}
          updateWishlistDataIds={updateWishlistDataIds}
          updateCartDataIds={updateCartDataIds}
          cartDataIds={cartDataIds}></WishListProducts>
      )}
    </div>
  );
};

export default Dashboard;
