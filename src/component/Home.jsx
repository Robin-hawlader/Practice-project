import React from "react";
import Banner from "./Banner/Banner";
import Navbar from "./header/navbar";
import ProductLineWithButtons from "./products/ProductLineWithButtons";
import TopSelling from "./products/TopSelling";
import ProductBanner from "./Banner/ProductBanner";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <ProductLineWithButtons></ProductLineWithButtons>
      <TopSelling></TopSelling>
      <ProductBanner></ProductBanner>
    </div>
  );
};

export default Home;
