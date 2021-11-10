import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../../../Hooks/useAuth";

function DashNavs() {
  let { url } = useRouteMatch();
  const { logoutUser } = useAuth();

  return (
    <>
      <li>User</li>
      <ul>
        <Link to={`${url}/myorders`}>
          <li>My Orders</li>
        </Link>
        <Link to={`${url}/review`}>
          <li>Review</li>
        </Link>
        <Link to={`${url}/payment`}>
          <li>Payment</li>
        </Link>
        <a href="/">
          <li onClick={logoutUser}>Logout</li>
        </a>
      </ul>
    </>
  );
}

export default DashNavs;
