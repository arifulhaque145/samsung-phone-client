import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import useAuth from "../../../../../../Hooks/useAuth";

function UserCard({ data }) {
  const { _id, uid, email, displayName, role } = data;
  const { deleteNewUser } = useAuth();

  const deleteUser = (id, email, uid) => {
    deleteNewUser(uid);
    fetch("http://localhost:5000/users/" + id, {
      method: "delete",
    });

    fetch("http://localhost:5000/order/" + email, {
      method: "delete",
    });

    fetch("http://localhost:5000/review/" + email, {
      method: "delete",
    });
  };

  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
      sx={{ boxShadow: 2, my: 1, p: 1 }}
    >
      <Grid item lg={3} xl={3} md={3}>
        <Typography variant="body1" sx={{ p: 1 }}>
          {displayName}
        </Typography>
      </Grid>
      <Grid item lg={3} xl={3} md={3}>
        <Typography variant="body1" sx={{ p: 1 }}>
          {email}
        </Typography>
      </Grid>
      <Grid item lg={3} xl={3} md={3}>
        <Typography variant="body1" sx={{ p: 1, textTransform: "uppercase" }}>
          {role}
        </Typography>
      </Grid>
      <Grid item lg={3} xl={3} md={3}>
        <Button variant="contained" onClick={() => deleteUser(_id, email, uid)}>
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}

export default UserCard;
