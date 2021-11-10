import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function DashNavs() {
  let { url } = useRouteMatch();

  return (
    <ul>
      {/* <li>Admin</li>
      <ul>
        <Link to={`${url}/edituser`}>
          <li>Edit User</li>
        </Link>
      </ul> */}
      <li>User</li>
      <ul>
        <Link to={`${url}/myorders`}>My Orders</Link>
        <Link to={`${url}/review`}>Review</Link>
        <Link to={`${url}/payment`}>Payment</Link>
        <Link to={`${url}/logout`}>Logout</Link>
      </ul>
    </ul>
  );
}

export default DashNavs;
