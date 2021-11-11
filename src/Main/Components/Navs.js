import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import useAuth from "../Hooks/useAuth";
import { Links } from "../styles";

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
            <Links to="/">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Home
              </Typography>
            </Links>
            <Links to="/explore">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Explore
              </Typography>
            </Links>
            <Links to="/dashboard">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Dashboard
              </Typography>
            </Links>
            {!user?.email ? (
              <Links to="/login">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "white", color: "blue" }}
                >
                  Login
                </Button>
              </Links>
            ) : (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {user?.displayName}
              </Typography>
            )}
            {!user?.email ? (
              <Links to="/register">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "white", color: "blue" }}
                >
                  Register
                </Button>
              </Links>
            ) : (
              <a href="/">
                <Button
                  onClick={logoutUser}
                  variant="contained"
                  sx={{ backgroundColor: "white", color: "blue" }}
                >
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
