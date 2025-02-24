import React from "react";
import Header from "../Header/Header";
import TestTwo from "../Header/test/TestTwo";
import TestOne from "../Header/test/testOne";
import Carousels from "../Carousel/Carousels";
import Category from "../Category/Category";
import Product from "../Product/Product";

const Home = () => {
  return (
    <>
      <Header />
      <Carousels />
      <Category />
      <Product />
    </>
  );
};

export default Home;
