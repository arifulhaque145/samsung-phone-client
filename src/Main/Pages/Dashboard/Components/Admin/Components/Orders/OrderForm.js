import { Button, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function OrderForm({ newData }) {
  const { register, handleSubmit } = useForm();
  const [alert, setAlert] = useState(false);

  const onSubmit = (data) => {
    fetch(`https://quiet-savannah-39001.herokuapp.com/orders/${newData._id}`, {
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
