import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Navs from "../../Components/Navs";
import AddOrder from "./Components/AddOrder";
import DashboardHome from "./Components/DashboardHome";
import DashNavs from "./Components/DashNavs";
import EditUser from "./Components/MyOrder";
import Review from "./Components/Review";
import Payment from "./Components/Payment";

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
