import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { checkUser, } = useAuth();
  
  if (!checkUser.role) {
    return <CircularProgress />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        checkUser.email && checkUser.role === "admin" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
