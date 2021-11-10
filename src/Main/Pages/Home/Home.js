import React, { useEffect, useState } from "react";
import Navs from "../../Components/Navs";
import Product from "./Products/Product";
import ProductContainer from "./Products/ProductContainer";

function Home() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);

  return (
    <>
      <Navs />
      <h1>Banner</h1>
      <ProductContainer>
        {product.slice(0, 6).map((item) => (
          <Product key={item._id} data={item} />
        ))}
      </ProductContainer>
      <h1>Review</h1>
      <h1>Contact Us</h1>
      <h1>Footer</h1>
    </>
  );
}

export default Home;
