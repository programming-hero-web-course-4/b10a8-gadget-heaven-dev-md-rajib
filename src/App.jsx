import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { getAllData } from "./utlitlies/dataRetrieve";
import { createContext } from "react";

export const DataContext = createContext();

function App() {
  const [products, updateProducts] = useState([]);

  useEffect(() => {
    // fetch("./productData.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     updateProducts(data);
    //   });

    getAllData(updateProducts);
  }, []);

  return (
    <>
      <DataContext.Provider value={{ products, updateProducts }}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </DataContext.Provider>
    </>
  );
}

export default App;
