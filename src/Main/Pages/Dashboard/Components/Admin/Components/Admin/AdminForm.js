import { Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

function AdminForm({ newData }) {
  const { _id, displayName, email, role } = newData;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "put",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ boxShadow: 2, my: 1 }}
    >
      <Grid xs={2} sm={4} md={3} sx={{ my: 1 }}>
        <Typography variant="body1" sx={{ p: 2 }}>
          {displayName}
        </Typography>
      </Grid>
      <Grid xs={2} sm={4} md={3} sx={{ my: 1 }}>
        <Typography variant="body1" sx={{ p: 2 }}>
          {email}
        </Typography>
      </Grid>
      <Grid xs={2} sm={4} md={3} sx={{ my: 1 }}>
        <Typography
          variant="body1"
          sx={{
            p: 2,
            textTransform: "uppercase",
            color: role === "admin" ? "green" : "red",
          }}
        >
          {role}
        </Typography>
      </Grid>
      <Grid xs={2} sm={4} md={3} sx={{ my: 1 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Select defaultValue="member" {...register("role")}>
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="member">Member</MenuItem>
          </Select>
          <Button type="submit">Submit</Button>
        </form>
      </Grid>
    </Grid>
  );
}

export default AdminForm;
