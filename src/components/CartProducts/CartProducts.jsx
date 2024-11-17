import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import { DataContext } from "../../App";
import sortLogo from "../../assets/sort.png";
import { getAllData } from "../../utlitlies/dataRetrieve";
import { retrieveCartData, saveCartData } from "../../utlitlies/localStorageDB";
import Blank from "../Blank/Blank";
import CartProduct from "../CartProduct/CartProduct";
import Modal from "../Modal/Modal";
const CartProducts = ({ cartDataIds, updateCartDataIds }) => {
  const { products, wishList, updateWishList, updateCart, updateProducts } =
    useContext(DataContext);

  const [cartObjectsState, updateObjectList] = useState([]);

  useEffect(() => {
    const curCart = products.filter((cur) =>
      cartDataIds.includes(cur.product_id)
    );
    updateObjectList(curCart);
  }, []);

  useEffect(() => {
    // getAllData(updateProducts);

    getAllData(updateProducts);
  }, []);

  console.log("Cart ids:", cartDataIds);
  console.log("cart obs:", cartObjectsState);
  console.log("cur pro:", products);

  useEffect(() => {
    const updatedCartObjects = products.filter((cur) =>
      cartDataIds.includes(cur.product_id)
    );
    updateObjectList(updatedCartObjects);
  }, [products, cartDataIds]);

  const [modalData, updateModalData] = useState(0);

  const handlePurchase = () => {
    if (
      cartObjectsState.length &&
      cartObjectsState.reduce((total, cur) => total + cur.price, 0).toFixed(2) >
        0
    ) {
      updateModalData(
        cartObjectsState.reduce((total, cur) => total + cur.price, 0).toFixed(2)
      );
      document.getElementById("my_modal_1").showModal();
      updateCartDataIds([]);
      saveCartData([]);
    } else {
      toast.error("Not enough product in the cart.");
    }
  };

  return (
    <div>
      <Modal updateCart={updateCart} price={modalData}></Modal>
      <div className="mt-6 flex justify-between">
        <div>
          <h1 className="text-[#0B0B0B] text-2xl font-bold">Cart</h1>
        </div>

        <div className="flex items-center gap-4">
          <h1 className="text-[#0B0B0B] text-2xl font-bold">
            Total cost:{" "}
            {cartObjectsState
              .reduce((total, cur) => total + cur.price, 0)
              .toFixed(2)}
          </h1>
          <div
            onClick={() =>
              updateObjectList(
                [...cartObjectsState].sort((a, b) => b.price - a.price)
              )
            }
            className="flex items-center py-2 px-4 gap-[10px] text-[#9538E2] font-semibold rounded-[32px] border-2 border-[#9538E2] hover:bg-purple-100">
            <button>Sort By Price</button>
            <div>
              <img src={sortLogo} alt="" />
            </div>
          </div>
          <button
            onClick={handlePurchase}
            className="py-2 px-6 bg-[#9538E2] text-white text-[18px] font-medium rounded-[32px] hover:text-[#9538E2] hover:outline hover:outline-[#9538E2] hover:bg-white">
            Purchase
          </button>
        </div>
      </div>

      {cartObjectsState.length ? (
        <div className="flex flex-col gap-4 pt-8">
          {cartObjectsState.map((data) => {
            return (
              <CartProduct
                key={data.product_id + "cartProduct"}
                cartDataIds={cartDataIds}
                updateCartDataIds={updateCartDataIds}
                updateObjectList={updateObjectList}
                cartObjectsState={cartObjectsState}
                data={data}
                className></CartProduct>
            );
          })}
        </div>
      ) : (
        <Blank></Blank>
      )}
    </div>
  );
};

export default CartProducts;
