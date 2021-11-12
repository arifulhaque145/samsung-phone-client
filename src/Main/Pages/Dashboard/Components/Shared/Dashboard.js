import List from "@mui/material/List";
import React from "react";
import { Switch, useRouteMatch } from "react-router-dom";
import Navs from "../../../../Components/Navs";
import useAuth from "../../../../Hooks/useAuth";
import AdminRoute from "../../../../Routes/AdminRoute";
import PrivateRoute from "../../../../Routes/PrivateRoute";
import AdminHome from "../Admin/AdminHome";
import AddProduct from "../Admin/Components/AddProduct";
import AdminDash from "../Admin/Components/AdminDash";
import AllOrders from "../Admin/Components/AllOrders";
import AllUsers from "../Admin/Components/AllUsers";
import MakeAdmin from "../Admin/Components/MakeAdmin";
import DashboardHome from "../User/Dashboard/DashboardHome";
import DashNavs from "../User/Dashboard/DashNavs";
import MyOrder from "../User/Order/MyOrder";
import Payment from "./Payment";
import Review from "./Review/Review";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

function Dashboard() {
  let { path } = useRouteMatch();
  const { checkUser } = useAuth();

  return (
    <Box sx={{ display: 'flex' }}>
      <Navs />
      <List>{checkUser?.role === "admin" ? <AdminDash /> : <DashNavs />}</List>
      <Divider />
      <List>
        <Switch>
          <PrivateRoute exact path={path}>
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
          </AdminRoute>
        </Switch>
      </List>
    </Box>
  );
}

export default Dashboard;
