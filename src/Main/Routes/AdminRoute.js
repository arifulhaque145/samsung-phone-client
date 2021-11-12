import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { checkUser, isLoading } = useAuth();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        checkUser?.role === "admin" ? (
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
