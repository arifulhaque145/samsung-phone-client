import { Button, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";

function OrderForm({ newData }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/orders/${newData._id}`, {
      method: "put",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select defaultValue="pending" {...register("status")}>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="approved">Approved</MenuItem>
        </Select>
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
}

export default OrderForm;
