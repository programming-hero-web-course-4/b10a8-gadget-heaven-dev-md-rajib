import React, { useContext } from "react";
import { toast } from "react-toastify";
import { DataContext } from "../../App";
import bannerImage from "../../assets/banner.jpg";
import deleteLogo from "../../assets/delete.png";
import {
  retrieveCartData,
  saveCartData,
  saveWishListData,
} from "../../utlitlies/localStorageDB";

const WishlistProduct = ({ current }) => {
  const {
    products,
    updateProducts,
    wishList,
    updateWishList,
    cart,
    updateCart,
  } = useContext(DataContext);

  const currentProduct = products.find((cur) => cur.product_id === current);

  const handleRemove = () => {
    console.log("clicked on remove");

    const newData = wishList.filter((cur) => cur !== current);
    updateWishList(newData);
    saveWishListData(newData);
  };

  const handleAddToCart = () => {
    const data = retrieveCartData();

    console.log("updating cart frm wish");
    if (data.includes(current)) {
      //  toast.warn("Product already in the cart.");

      toast.warn("Product already in the cart.");
    } else {
      data.push(current);
      saveCartData(data);
      updateCart(data);
      //   toast.success("Successfully added to cart!");
      toast.success("Successfully added to cart!");
    }
  };
  return (
    <div className="p-8 flex gap-8 bg-white rounded-2xl items-center relative">
      <div className="w-[200px] h-[200px]">
        <img className="w-full h-full rounded-xl" src={bannerImage} alt="" />
      </div>

      <div className="  h-full">
        <div className="flex flex-col gap-5 ">
          <h1 className="text-[#09080F] text-2xl font-semibold">
            {currentProduct.product_title}
          </h1>

          <div className="flex ">
            <p className="text-[18px] text-black font-semibold">
              Description:{" "}
            </p>
            <p className="text-[#09080F99] text-[18px] ">
              {currentProduct.description}
            </p>
          </div>

          <p className="text-[#09080FCC] font-semibold text-xl ">
            Price: $ {currentProduct.price}
          </p>

          <button
            onClick={handleAddToCart}
            className="bg-[#9538E2] w-[160px] py-4 text-white rounded-[32px]">
            Add to Card
          </button>
        </div>
      </div>
      <div
        onClick={handleRemove}
        className="absolute right-5 ml-[200px] border border-red-700 h-10 w-10 p-2 rounded-full">
        <img className="w-full h-full object-contain" src={deleteLogo} alt="" />
      </div>
    </div>
  );
};

export default WishlistProduct;
