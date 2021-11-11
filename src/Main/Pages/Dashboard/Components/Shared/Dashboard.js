import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Navs from "../../../../Components/Navs";
import useAuth from "../../../../Hooks/useAuth";
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

function Dashboard() {
  let { path } = useRouteMatch();
  const { checkUser } = useAuth();

  return (
    <>
      <Navs />
      {checkUser?.role === "admin" ? <AdminDash /> : <DashNavs />}
      <Switch>
        <Route exact path={path}>
          {checkUser?.role === "admin" ? <AdminHome /> : <DashboardHome />}
        </Route>
        <Route path={`${path}/myorders`}>
          <MyOrder />
        </Route>
        <Route path={`${path}/review`}>
          <Review />
        </Route>
        <Route path={`${path}/payment`}>
          <Payment />
        </Route>
        <Route path={`${path}/allusers`}>
          <AllUsers />
        </Route>
        <Route path={`${path}/allorders`}>
          <AllOrders />
        </Route>
        <Route path={`${path}/addproduct`}>
          <AddProduct />
        </Route>
        <Route path={`${path}/makeadmin`}>
          <MakeAdmin />
        </Route>
        {/* <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addDoctor`}>
          <AddDoctor></AddDoctor>
        </AdminRoute> */}
      </Switch>
    </>
  );
}

export default Dashboard;
