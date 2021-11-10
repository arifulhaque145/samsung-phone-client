import React, { useEffect, useState } from "react";
import Navs from "../../Components/Navs";
import Product from "../Home/Products/Product";

function Explore() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);

  return (
    <div>
      <Navs />
      <h1>This is explore</h1>
      {product.map((item) => (
        <Product key={item._id} data={item} />
      ))}
    </div>
  );
}

export default Explore;
