import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navs from "../Components/Navs";
import ResponsiveDrawer from "../Pages/Dashboard/Components/User/Dashboard/Drawer";
import Explore from "../Pages/Explore/Explore";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Purchase from "../Pages/Purchase/Purchase";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return (
    <Router>
      <Navs />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute path="/dashboard">
          <ResponsiveDrawer />
        </PrivateRoute>
        <Route path="/explore">
          <Explore />
        </Route>
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
