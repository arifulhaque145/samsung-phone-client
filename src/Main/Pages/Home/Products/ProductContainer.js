import React from "react";
import Grid from "@mui/material/Grid";

function ProductContainer({ children }) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {children}
    </Grid>
  );
}

export default ProductContainer;
