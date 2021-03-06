import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import React from "react";
import { Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import AdminRoute from "../../../../Routes/AdminRoute";
import PrivateRoute from "../../../../Routes/PrivateRoute";
import AdminHome from "../Admin/AdminHome";
import AddProduct from "../Admin/Components/AddProduct";
import AllOrders from "../Admin/Components/AllOrders";
import AllUsers from "../Admin/Components/AllUsers";
import MakeAdmin from "../Admin/Components/MakeAdmin";
import DashboardHome from "../User/Dashboard/DashboardHome";
import MyOrder from "../User/Order/MyOrder";
import Payment from "./Payment";
import Review from "./Review/Review";

function Dashboard() {
  let { path } = useRouteMatch();
  const { isLoading } = useAuth();
  if (isLoading) {
    return <p></p>;
  }

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Divider />
        <List>
          <Switch>
            <PrivateRoute exact path={path}>
              <DashboardHome />
            </PrivateRoute>
            <AdminRoute exact path={path}>
              <AdminHome />
            </AdminRoute>
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
            </AdminRoute>
          </Switch>
        </List>
      </Box>
    </>
  );
}

export default Dashboard;
