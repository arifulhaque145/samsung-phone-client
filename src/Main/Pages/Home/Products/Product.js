import React from "react";
import { Link } from "react-router-dom";

function Product({ data }) {
  const { _id, name, price } = data;

  return (
    <div>
      <h1>{name}</h1>
      <p>{price}</p>
      <Link to={`/purchase/${_id}`}>Order</Link>
    </div>
  );
}

export default Product;
