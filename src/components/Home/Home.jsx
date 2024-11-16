import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { DataContext } from "../../App";
import { getAllData } from "../../utlitlies/dataRetrieve";

import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = ({}) => {
  const { products, updateProducts } = useContext(DataContext);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gadget Heaven | Home</title>
      </Helmet>

      <Banner></Banner>

      <Books products={products} updateProducts={updateProducts}></Books>
    </div>
  );
};

export default Home;
