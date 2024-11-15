import React from "react";
import { Helmet } from "react-helmet";

import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gadget Heaven | Home</title>
      </Helmet>

      <Banner></Banner>
    </div>
  );
};

export default Home;
