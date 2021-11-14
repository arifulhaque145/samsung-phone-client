import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

function Purchase() {
  const { id } = useParams();
  const { user } = useAuth();
  const [purchaseData, setPurchaseData] = useState({});
  const history = useHistory();

  const url = `https://quiet-savannah-39001.herokuapp.com/products/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setPurchaseData(data));

  const placeOrder = () => {
    const url = `https://quiet-savannah-39001.herokuapp.com/orders`;
    const { displayName, email } = user;
    const { name } = purchaseData;

    const datas = {
      itemid: id,
      item: name,
      name: displayName,
      email,
      count: 1,
      status: "pending",
    };

    fetch(url, {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(datas),
    })
      .then((res) => res.json())
      .then((data) => setPurchaseData(data));

    history.push("/dashboard/myorders");
  };

  return (
    <Box sx={{ m: { lg: 15, xs: 5 }, mt: { xs: 15 } }}>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: { lg: "center" },
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Grid
          container
          xs={12}
          lg={6}
          sx={{ justifyContent: { lg: "center" } }}
        >
          <Card sx={{ width: 345, textAlign: "center" }}>
            <CardMedia
              component="img"
              height="350"
              image={purchaseData.img}
              alt="Paella dish"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textTransform: "uppercase" }}
              >
                {purchaseData.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                align="justify"
                paragraph={true}
              >
                {purchaseData.desc}
              </Typography>
              <Typography
                variant="h4"
                color="text.secondary"
                sx={{ fontWeight: "bold" }}
              >
                TK. {purchaseData.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid container xs={12} xs={6} sx={{ justifyContent: { lg: "center" } }}>
          <Card sx={{ width: "100%", p: { lg: 2 } }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textTransform: "uppercase" }}
              >
                Make an Order
              </Typography>
              <TextField
                variant="outlined"
                fullWidth="true"
                disabled
                defaultValue={user.displayName}
              />
              <TextField
                variant="outlined"
                fullWidth="true"
                disabled
                defaultValue={user.email}
                sx={{ my: 2 }}
              />
              <Button variant="contained" onClick={placeOrder}>
                Place Order
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Purchase;
