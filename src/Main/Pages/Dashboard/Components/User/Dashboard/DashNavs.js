import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import useAuth from "../../../../../Hooks/useAuth";
import { LinkTab } from "../../../../../styles";

function DashNavs() {
  let { url } = useRouteMatch();
  const { logoutUser } = useAuth();

  return (
    <>
      <Toolbar />
      <Divider />
      <li>User</li>
      <ListItem>
        <LinkTab to={`${url}/myorders`}>
          <ListItemText primary="My Orders" />
        </LinkTab>
        <LinkTab to={`${url}/review`}>
          <ListItemText primary="Review" />
        </LinkTab>
        <LinkTab to={`${url}/payment`}>
          <ListItemText primary="Payment" />
        </LinkTab>
        <a href="/">
          <li onClick={logoutUser}>Logout</li>
        </a>
      </ListItem>
    </>
  );
}

export default DashNavs;
