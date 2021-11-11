import React from "react";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";

function Product({ data }) {
  const { _id, name, price } = data;

  return (
    <Paper elevation={3}>
      <h1>{name}</h1>
      <p>{price}</p>
      <Link to={`/purchase/${_id}`}>Order</Link>
    </Paper>
  );
}

export default Product;
