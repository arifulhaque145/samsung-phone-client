import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../../../Hooks/useAuth";

function AdminDash() {
  let { url } = useRouteMatch();
  const { logoutUser } = useAuth();

  return (
    <>
      <li>Admin</li>
      <ul>
        <Link to={`${url}/makeadmin`}>
          <li>Make Admin</li>
        </Link>
        <Link to={`${url}/allusers`}>
          <li>All Users</li>
        </Link>
        <Link to={`${url}/allorders`}>
          <li>All Orders</li>
        </Link>
        <Link to={`${url}/addproduct`}>
          <li>Add Product</li>
        </Link>
        <Link to="/">
          <li onClick={logoutUser}>Logout</li>
        </Link>
      </ul>
    </>
  );
}

export default AdminDash;
