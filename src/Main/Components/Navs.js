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
    <Box sx={{ flexGrow: 1, textTransform: "uppercase" }}>
      <AppBar position="fixed" sx={{ bgcolor: "text.primary" }}>
        <Toolbar>
          <Typography variant="button" component="div" sx={{ flexGrow: 1 }}>
            Samsung BD
          </Typography>
          <Links to="/">
            <Typography variant="button" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
          </Links>
          <Links to="/explore">
            <Typography variant="button" component="div" sx={{ flexGrow: 1 }}>
              Explore
            </Typography>
          </Links>
          {user?.email && (
            <Links to="/dashboard">
              <Typography variant="button" component="div" sx={{ flexGrow: 1 }}>
                Dashboard
              </Typography>
            </Links>
          )}
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
            <Links to="#">
              <Typography variant="button" component="div" sx={{ flexGrow: 1, mr: 2 }}>
                {user?.displayName}
              </Typography>
            </Links>
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
            <Button
              onClick={logoutUser}
              variant="contained"
              sx={{ backgroundColor: "white", color: "blue" }}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navs;
