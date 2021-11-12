import { Grid, Typography } from "@mui/material";
import React from "react";
import OrderForm from "./OrderForm";

function OrderCard({ data }) {
  const { item, email, status } = data;

  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ boxShadow: 2, my: 1 }}
    >
      <Grid xs={2} sm={4} md={3} sx={{ my: 1, alignItems: "center" }}>
        <Typography variant="body1" display="block" gutterBottom sx={{ p: 2 }}>
          {email}
        </Typography>
      </Grid>
      <Grid xs={2} sm={4} md={3} sx={{ my: 1 }}>
        <Typography variant="button" display="block" gutterBottom sx={{ p: 2 }}>
          {item}
        </Typography>
      </Grid>
      <Grid xs={2} sm={4} md={3} sx={{ my: 1 }}>
        <Typography
          variant="button"
          display="block"
          gutterBottom
          sx={{ p: 2, color: status === "approved" && "green" }}
        >
          {status}
        </Typography>
      </Grid>
      <Grid xs={2} sm={4} md={3} sx={{ my: 1 }}>
        <OrderForm newData={data} />
      </Grid>
    </Grid>
  );
}

export default OrderCard;
