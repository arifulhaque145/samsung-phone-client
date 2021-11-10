import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Explore from "../Pages/Explore/Explore";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Purchase from "../Pages/Purchase/Purchase";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="/purchase/:id">
          <Purchase />
        </Route>
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
