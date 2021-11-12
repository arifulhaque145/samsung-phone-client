import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResponsiveDrawer from "../Pages/Dashboard/Components/User/Dashboard/Drawer";
import Explore from "../Pages/Explore/Explore";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Purchase from "../Pages/Purchase/Purchase";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  // let { path } = useRouteMatch();
  // const { checkUser } = useAuth();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute path="/dashboard">
          <ResponsiveDrawer />
          {/* <Dashboard /> */}
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
        {/* <PrivateRoute exact path={path}>
          {checkUser?.role === "admin" ? <AdminHome /> : <DashboardHome />}
        </PrivateRoute>
        <PrivateRoute path={`${path}/myorders`}>
          <MyOrder />
        </PrivateRoute>
        <PrivateRoute path={`${path}/review`}>
          <Review />
        </PrivateRoute>
        <PrivateRoute path={`${path}/payment`}>
          <Payment />
        </PrivateRoute>
        <AdminRoute path={`${path}/allusers`}>
          <AllUsers />
        </AdminRoute>
        <AdminRoute path={`${path}/allorders`}>
          <AllOrders />
        </AdminRoute>
        <AdminRoute path={`${path}/addproduct`}>
          <AddProduct />
        </AdminRoute>
        <AdminRoute path={`${path}/makeadmin`}>
          <MakeAdmin />
        </AdminRoute> */}
      </Switch>
    </Router>
  );
}

export default AllRoutes;
