import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import Product from "../Home/Products/Product";

function Explore() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://quiet-savannah-39001.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);

  return (
    <>
      <Box sx={{ mx: 4, textAlign: "center" }}>
        <h1>This is explore</h1>
        <Grid container spacing={2}>
          {product.map((item) => (
            <Grid item xs={3}>
              <Product key={item._id} data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Explore;
