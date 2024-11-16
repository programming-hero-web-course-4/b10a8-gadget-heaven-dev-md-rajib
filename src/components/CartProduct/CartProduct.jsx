import React from "react";
import { useContext } from "react";
import { DataContext } from "../../App";
import bannerImage from "../../assets/banner.jpg";
import deleteLogo from "../../assets/delete.png";
import { saveCartData } from "../../utlitlies/localStorageDB";
const CartProduct = ({ data, updateObjectList, cartObjectsState }) => {
  const { products, cart, updateCart } = useContext(DataContext);

  const currentProduct = data;

  const handleRemove = () => {
    const newData = cart.filter((cur) => cur !== data.product_id);
    saveCartData(newData);
    updateCart(newData);
    updateObjectList(
      cartObjectsState.filter((cur) => cur.product_id !== data.product_id)
    );
  };
  return (
    <div className="p-8 flex gap-8 bg-white rounded-2xl items-center relative">
      <div className="w-[200px] h-[124px]">
        <img className="w-full h-full rounded-xl" src={bannerImage} alt="" />
      </div>

      <div>
        <div className="flex flex-col justify-between gap-5">
          <h1 className="text-[#09080F] text-2xl font-semibold">
            {currentProduct.product_title}
          </h1>

          <p className="text-[#09080F99] text-[18px] ">
            {currentProduct.description}
          </p>

          <p className="text-[#09080FCC] font-semibold text-xl ">
            Price: $ {currentProduct.price}
          </p>
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

export default CartProduct;
