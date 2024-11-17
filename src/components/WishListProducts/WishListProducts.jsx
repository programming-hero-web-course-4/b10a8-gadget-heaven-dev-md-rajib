import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import Blank from "../Blank/Blank";
import WishlistProduct from "../WishlistProduct/WishlistProduct";

const WishListProducts = ({
  cartDataIds,
  updateCartDataIds,
  wishlistDataIds,
  updateWishlistDataIds,
}) => {
  const {
    products,
    updateProducts,
    wishList,
    updateWishList,
    cart,
    updateCart,
  } = useContext(DataContext);

  const [wishlistObjectsState, updateWishlistObjectsState] = useState([]);

  useEffect(() => {
    const curWish = products.filter((cur) =>
      wishlistDataIds.includes(cur.product_id)
    );
    updateWishlistObjectsState(curWish);
  }, []);

  useEffect(() => {
    const updatedWishObjects = products.filter((cur) =>
      wishlistDataIds.includes(cur.product_id)
    );
    updateWishlistObjectsState(updatedWishObjects);
  }, [products, wishlistDataIds]);

  return (
    <div>
      <h1 className="text-[#0B0B0B] text-2xl font-bold text-left mt-6">
        WishList
      </h1>

      <div className="flex flex-col gap-4 pt-8">
        {wishlistObjectsState.length ? (
          wishlistObjectsState.map((current) => {
            return (
              <WishlistProduct
                key={current.product_id + "wishlistproduct"}
                updateCartDataIds={updateCartDataIds}
                cartDataIds={cartDataIds}
                wishlistDataIds={wishlistDataIds}
                updateWishlistDataIds={updateWishlistDataIds}
                current={current.product_id}></WishlistProduct>
            );
          })
        ) : (
          <Blank></Blank>
        )}
      </div>
    </div>
  );
};

export default WishListProducts;
