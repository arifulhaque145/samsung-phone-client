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
      <h1>This is a home</h1>
      <ProductContainer>
        {product.map((item) => (
          <Product key={item._id} data={item} />
        ))}
      </ProductContainer>
    </>
  );
}

export default Home;
