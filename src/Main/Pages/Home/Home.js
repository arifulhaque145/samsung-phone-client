import React from "react";
import Footer from "../../Components/Footer";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Products from "./Products/Products";
import Review from "./Review/Review";

function Home() {
  return (
    <>
      <Banner />
      <Products />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
