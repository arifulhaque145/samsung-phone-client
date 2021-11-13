import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function AddProduct() {
  const [alert, setAlert] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("https://quiet-savannah-39001.herokuapp.com/products", {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        my: 8,
      }}
    >
      <Typography variant="h5" gutterBottom component="div" sx={{ mb: 4 }}>
        Add Product
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", width: "50%" }}
      >
        <TextField
          label="Product Name"
          {...register("name", { required: true })}
          style={{ textTransform: "lowercase" }}
        />
        <br />
        <TextField
          label="Product Description"
          {...register("desc", { required: true })}
          style={{ textTransform: "lowercase" }}
          multiline
          rows={4}
        />
        <br />
        <TextField
          label="Price"
          type="number"
          {...register("price", { required: true })}
          style={{ textTransform: "lowercase" }}
        />
        <br />
        <TextField
          label="Image URL"
          {...register("img", { required: true })}
          style={{ textTransform: "lowercase" }}
        />
        <br />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" variant="contained" sx={{ width: "50%" }}>
            Submit
          </Button>
        </Box>
      </form>
      {alert && (
        <Alert sx={{ width: "50%", my: 2 }} severity="success">
          New Product Added
        </Alert>
      )}
    </Box>
  );
}

export default AddProduct;
