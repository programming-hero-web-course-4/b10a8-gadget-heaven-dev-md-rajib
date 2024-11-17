import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { getAllData } from "./utlitlies/dataRetrieve";
import { createContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  retrieveCartData,
  retrieveWishListData,
} from "./utlitlies/localStorageDB";
import Footer from "./components/Footer/Footer";
export const DataContext = createContext();

function App() {
  const [products, updateProducts] = useState([]);
  const [wishList, updateWishList] = useState([]);
  const [cart, updateCart] = useState([]);

  useEffect(() => {
    // getAllData(updateProducts);

    getAllData(updateProducts);

    console.log("products from app jsx", products);
  }, []);

  useEffect(() => {
    const cartData = retrieveCartData();
    updateCart(cartData);
  }, []);

  useEffect(() => {
    const wishListData = retrieveWishListData();
    updateWishList(wishListData);
  }, []);

  return (
    <>
      <ToastContainer></ToastContainer>
      <DataContext.Provider
        value={{
          products,
          updateProducts,
          wishList,
          updateWishList,
          cart,
          updateCart,
        }}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </DataContext.Provider>

      <Footer></Footer>
    </>
  );
}

export default App;
