import { CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import ProductContainer from "./ProductContainer";

function Products() {
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch("https://quiet-savannah-39001.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
    setLoader(false);
  }, [product]);

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          mb: 8,
          textAlign: "center",
          fontWeight: "light",
          textTransform: "uppercase",
        }}
      >
        Latest Phones
      </Typography>
      {!loader ? (
        <ProductContainer>
          {product.slice(0, 6).map((item) => (
            <Product key={item._id} data={item} />
          ))}
        </ProductContainer>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}

export default Products;
