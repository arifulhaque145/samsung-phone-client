import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";

function AddProduct() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // fetch("http://localhost:5000/products", {
    //   method: "put",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(data),
    // });
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        my: 8
      }}
    >
      <Typography variant="h5" gutterBottom component="div" sx={{mb: 4}}>
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
    </Box>
  );
}

export default AddProduct;
