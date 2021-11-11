import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

function Navs() {
  const { user, logoutUser } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Samsung BD
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Link to="/">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Home
              </Typography>
            </Link>
            <Link to="/explore">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Explore
              </Typography>
            </Link>
            <Link to="/dashboard">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Dashboard
              </Typography>
            </Link>
            {!user?.email ? (
              <Link to="/login">
                <Button color="inherit">Login</Button>
              </Link>
            ) : (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {user?.displayName}
              </Typography>
            )}
            {!user?.email ? (
              <Link to="/register">
                <Button color="inherit">Register</Button>
              </Link>
            ) : (
              <a href="/">
                <Button onClick={logoutUser} color="inherit">
                  Logout
                </Button>
              </a>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navs;
