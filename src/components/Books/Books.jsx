import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllData, getFilteredData } from "../../utlitlies/dataRetrieve";
import Book from "../Book/Book";

const Books = ({ products, updateProducts }) => {
  const [currentButton, updateButton] = useState("all-products");

  const handleClick = (button) => {
    updateButton(button);
    if (button === "all-products") {
      getAllData(updateProducts);
    } else {
      getFilteredData(updateProducts, button);
    }
  };
  return (
    <div className="flex flex-col justify-center mt-[280px]">
      <h1 className="font-bold text-[#0B0B0B] text-4xl text-center">
        Explore Cutting-Edge Gadgets
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-10 ">
        <div className="col-span-1 h-fit flex flex-col items-center gap-6 bg-white p-4 rounded-2xl ">
          <button
            onClick={() => handleClick("all-products")}
            className={
              currentButton === "all-products"
                ? "w-[192px] h-[56px] bg-[#9538E2] text-[18px] font-extrabold rounded-[32px]  text-white"
                : "w-[192px] h-[56px] text-[#09080F99] text-[18px] font-medium bg-[#09080F0D] rounded-[32px]"
            }>
            All Products
          </button>
          <button
            onClick={() => handleClick("laptops")}
            className={
              currentButton === "laptops"
                ? "w-[192px] h-[56px] bg-[#9538E2] text-[18px] font-extrabold rounded-[32px] text-white"
                : "w-[192px] h-[56px] text-[#09080F99] text-[18px] font-medium bg-[#09080F0D] rounded-[32px]"
            }>
            Laptops
          </button>
          <button
            onClick={() => handleClick("phones")}
            className={
              currentButton === "phones"
                ? "w-[192px] h-[56px] bg-[#9538E2] text-[18px] font-extrabold rounded-[32px] text-white"
                : "w-[192px] h-[56px] text-[#09080F99] text-[18px] font-medium bg-[#09080F0D] rounded-[32px]"
            }>
            Phones
          </button>
          <button
            onClick={() => handleClick("accessories")}
            className={
              currentButton === "accessories"
                ? "w-[192px] h-[56px] bg-[#9538E2] text-[18px] font-extrabold rounded-[32px] text-white"
                : "w-[192px] h-[56px] text-[#09080F99] text-[18px] font-medium bg-[#09080F0D] rounded-[32px]"
            }>
            Accessories
          </button>
          <button
            onClick={() => handleClick("smart-watches")}
            className={
              currentButton === "smart-watches"
                ? "w-[192px] h-[56px] bg-[#9538E2] text-[18px] font-extrabold rounded-[32px] text-white"
                : "w-[192px] h-[56px] text-[#09080F99] text-[18px] font-medium bg-[#09080F0D] rounded-[32px]"
            }>
            Smart Watches
          </button>
          <button
            onClick={() => handleClick("macbook")}
            className={
              currentButton === "macbook"
                ? "w-[192px] h-[56px] bg-[#9538E2] text-[18px] font-extrabold rounded-[32px] text-white"
                : "w-[192px] h-[56px] text-[#09080F99] text-[18px] font-medium bg-[#09080F0D] rounded-[32px]"
            }>
            MacBook
          </button>
          <button
            onClick={() => handleClick("iphone")}
            className={
              currentButton === "iphone"
                ? "w-[192px] h-[56px] bg-[#9538E2] text-[18px] font-extrabold rounded-[32px] text-white"
                : "w-[192px] h-[56px] text-[#09080F99] text-[18px] font-medium bg-[#09080F0D] rounded-[32px]"
            }>
            Iphone
          </button>
        </div>

        <div className="col-span-3 grid grid-cols-3 gap-6 auto-rows-max">
          {products.map((product) => {
            return <Book product={product}></Book>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Books;
