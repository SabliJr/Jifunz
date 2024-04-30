import React from "react";
import "./App.css";

import Hero from "./Components/Hero/index";
import Promo from "./Components/Promo/index";
import Features from "./Components/Features/index";
import BeforeTheFooter from "./Components/BeforeTheFooter/index";
import Header from "./Components/TheHeader/index"
import Footer from "./Components/Footer/index"
import Pricing from "./Components/Pricing/index"

const Home = () => {
  return (
    <>
      <div className='Home'>
        <Header />
        <Hero />
        <Promo />
        <Features />
        {/* <BeforeTheFooter /> */}
        <Pricing />
        <Footer />
      </div>
    </>
  );
};

export default Home;
