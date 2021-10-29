import React from "react";
import Navbar from "./Navbar";
import CarouselContainer from "./Imageslide";
import Aboutus from "./Aboutus";
//import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <CarouselContainer/>
      <Aboutus />
    
      <Footer />
    </>
  );
};

export default Home;