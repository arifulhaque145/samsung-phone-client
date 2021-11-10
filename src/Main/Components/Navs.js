import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

function Navs() {
  const { user, logoutUser } = useAuth();

  return (
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/explore">
        <li>Explore</li>
      </Link>
      <Link to="/dashboard">
        <li>Dashboard</li>
      </Link>
      {!user?.email ? (
        <Link to="/login">
          <li>Login</li>
        </Link>
      ) : (
        <li>{user?.displayName}</li>
      )}
      {!user?.email ? (
        <Link to="/register">
          <li>Register</li>
        </Link>
      ) : (
        <Link to="/logout">
          <li onClick={logoutUser}>Logout</li>
        </Link>
      )}
    </ul>
  );
}

export default Navs;
