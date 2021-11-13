import { Button, Grid, Typography } from "@mui/material";
import React from "react";

function Order({ data }) {
  const { _id, item, status } = data;

  const handleDelete = (id) => {
    const check = window.confirm("Do you want to delete?");
    check && fetch(`http://localhost:5000/orders/${id}`, { method: "delete" });
  };

  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ boxShadow: 2, my: 2, p: 2 }}
    >
      <Grid item xs={2} sm={4} md={3} sx={{ pt: 1 }}>
        <Typography variant="body1">{_id}</Typography>
      </Grid>
      <Grid item xs={2} sm={4} md={3} sx={{ pt: 1 }}>
        <Typography variant="body1">{item}</Typography>
      </Grid>
      <Grid item xs={2} sm={4} md={3} sx={{ pt: 1 }}>
        <Typography
          variant="body1"
          sx={{
            textTransform: "uppercase",
            color: status === "approved" ? "green" : "red",
          }}
        >
          {status}
        </Typography>
      </Grid>
      <Grid item xs={2} sm={4} md={3}>
        <Button variant="outlined" onClick={() => handleDelete(_id)}>
          delete
        </Button>
      </Grid>
    </Grid>
  );
}

export default Order;
