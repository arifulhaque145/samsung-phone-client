import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navs from "../Components/Navs";
import useAuth from "../Hooks/useAuth";
import ResponsiveDrawer from "../Pages/Dashboard/Components/User/Dashboard/Drawer";
import AdminDrawer from "../Pages/Dashboard/d/AdminDrawer";
import Explore from "../Pages/Explore/Explore";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Purchase from "../Pages/Purchase/Purchase";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  const { checkUser, isLoading } = useAuth();
  // const [value, setValue] = React.useState({});

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", my: 20 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Router>
      <Navs />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute path="/dashboard">
          {checkUser.role === "member" ? <ResponsiveDrawer /> : <AdminDrawer />}
        </PrivateRoute>
        <PrivateRoute path="/explore">
          <Explore />
        </PrivateRoute>
        <PrivateRoute path="/purchase/:id">
          <Purchase />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default AllRoutes;
