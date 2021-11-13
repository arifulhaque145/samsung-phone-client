import { Grid } from "@mui/material";
import React from "react";

function ReviewContainer({ children }) {
  return (
    <Grid
      container
      sx={{ justifyContent: "center", alignItems: "center" }}
      spacing={{ xs: 2, md: 3, lg: 3 }}
      columns={{ xs: 4, sm: 8, md: 12, lg: 4 }}
    >
      {children}
    </Grid>
  );
}

export default ReviewContainer;
