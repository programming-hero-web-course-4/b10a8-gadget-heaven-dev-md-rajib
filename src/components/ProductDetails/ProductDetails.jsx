import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../App";
import bannerImage from "../../assets/banner.jpg";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  retrieveCartData,
  retrieveWishListData,
  saveCartData,
  saveWishListData,
} from "../../utlitlies/localStorageDB";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { products, updateProducts, updateWishList, updateCart } =
    useContext(DataContext);
  const { product_id } = useParams();
  const product = products.find((cur) => cur.product_id === product_id);
  const {
    product_title,
    price,
    availability,
    specification,
    description,
    rating,
  } = product;
  console.log(product_id);
  console.log(product);

  const handleCartOnClick = () => {
    const data = retrieveCartData();
    if (data.includes(product_id)) {
      //  toast.warn("Product already in the cart.");

      toast.warn("Product already in the cart.");
    } else {
      data.push(product_id);
      saveCartData(data);
      updateCart(data);
      //   toast.success("Successfully added to cart!");
      toast.success("Successfully added to cart!");
    }
  };

  const handleWishListOnClick = () => {
    const WishData = retrieveWishListData();
    if (WishData.includes(product_id)) {
      //  toast.warn("Product already in the cart.");

      toast.warn("Product already in the wishlist!");
    } else {
      WishData.push(product_id);
      saveWishListData(WishData);
      updateWishList(WishData);
      //   toast.success("Successfully added to cart!");
      toast.success("Successfully added to wishlist!");
    }
  };
  return (
    <div className="bg-[#9538E2]">
      <h1 className="text-white text-3xl font-bold text-center pt-5">
        Product Details
      </h1>

      <p className="text-white  text-center mt-5 w-[60%] mx-auto">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>

      <div className="relative pb-[200px] mt-10">
        <div className="w-[70%] left-1/2 -translate-x-1/2 h-fit absolute  mx-auto rounded-[32px] p-4 border bg-white flex gap-8">
          <div className="w-[520px]  ">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt=""
            />
          </div>

          {/* details container */}
          <div>
            <h1 className="text-[#09080F] text-3xl font-semibold">
              {product_title}
            </h1>

            <p className="text-[#09080FCC] text-xl font-semibold mt-4">
              Price: $ {price}
            </p>
            <p
              className={`${
                availability
                  ? "border border-green-600 bg-[#84d29a45] text-green-600 w-[90px] h-7 text-center rounded-3xl mt-4"
                  : " border border-red-600 bg-[#d8989857] text-red-600 w-[90px] h-7 text-center rounded-3xl mt-4"
              }`}>
              {availability ? "In Stock" : "Out Stock"}
            </p>

            <p className="text-[#09080F99] text-[18px] mt-4">{description}</p>
            <h2 className="text-[#09080F] font-bold text-[18px] mt-4">
              Specification:
            </h2>

            <div className="mt-4 text-[#09080F99] text-[18px]">
              {specification.map((data, ind) => {
                return (
                  <div>
                    {ind + 1}. {data}
                  </div>
                );
              })}
            </div>

            <h2 className="text-[#09080F] font-bold text-[18px] mt-4">
              Rating:
            </h2>
            <div className="flex gap-3 items-center">
              <ReactStars
                count={5} // Number of stars
                // Callback when a star is clicked
                size={30} // Size of the stars
                activeColor="#ffd700" // Active star color
                value={rating} // Current rating value
                edit={true} // Set to false for read-only
              />

              <div className="bg-[#09080F0D] text-[#09080FCC] text-[14px] font-medium py-2 px-4 rounded-3xl flex justify-center items-center">
                {rating}
              </div>
            </div>

            <div className=" flex gap-4 items-center  mt-4 ">
              <div
                onClick={handleCartOnClick}
                className="text-[18px] text-white font-bold bg-[#9538E2] rounded-[32px] w-[180px] h-12 flex justify-center items-center gap-3">
                <button>Add To Card</button>

                <div>
                  <FontAwesomeIcon icon={faCartPlus} />
                </div>
              </div>

              <div
                onClick={handleWishListOnClick}
                className="text-black border text-2xl h-[50px] w-[50px] rounded-full text-center flex justify-center items-center">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
