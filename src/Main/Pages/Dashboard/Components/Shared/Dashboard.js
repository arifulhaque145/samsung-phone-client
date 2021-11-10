import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Navs from "../../../../Components/Navs";
import AddOrder from "../Admin/AddOrder";
import DashNavs from "../User/DashNavs";
import EditUser from "../User/Order/MyOrder";
import DashboardHome from "../../DashboardHome";
import Payment from "./Payment";
import Review from "./Review/Review";

function Dashboard() {
  let { path } = useRouteMatch();

  return (
    <>
      <Navs />
      <DashNavs />
      <Switch>
        <Route exact path={path}>
          <DashboardHome />
        </Route>
        <Route path={`${path}/myorders`}>
          <EditUser />
        </Route>
        <Route path={`${path}/review`}>
          <Review />
        </Route>
        <Route path={`${path}/payment`}>
          <Payment />
        </Route>
        <Route path={`${path}/logout`}>
          <AddOrder />
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
