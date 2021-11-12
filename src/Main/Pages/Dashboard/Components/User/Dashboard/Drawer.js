import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Switch, useHistory, useRouteMatch, Route } from "react-router-dom";
import useAuth from "../../../../../Hooks/useAuth";
import AdminRoute from "../../../../../Routes/AdminRoute";
import PrivateRoute from "../../../../../Routes/PrivateRoute";
import { Links } from "../../../../../styles";
import AdminHome from "../../Admin/AdminHome";
import AddProduct from "../../Admin/Components/AddProduct";
import AllOrders from "../../Admin/Components/AllOrders";
import AllUsers from "../../Admin/Components/AllUsers";
import MakeAdmin from "../../Admin/Components/MakeAdmin";
import Payment from "../../Shared/Payment";
import Review from "../../Shared/Review/Review";
import MyOrder from "../../User/Order/MyOrder";
import DashboardHome from "./DashboardHome";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  let { path } = useRouteMatch();
  const { user, checkUser, logoutUser } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button onClick={() => history.push(`${path}/makeadmin`)}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Make Admin"} />
        </ListItem>
        <ListItem button onClick={() => history.push(`${path}/allusers`)}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"All Users"} />
        </ListItem>
        <ListItem button onClick={() => history.push(`${path}/allorders`)}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"All Orders"} />
        </ListItem>
        <ListItem button onClick={() => history.push(`${path}/addproduct`)}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Add Product"} />
        </ListItem>
        <ListItem button onClick={() => history.push(`${path}/addproduct`)}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Logout"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"My Orders"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Review"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Payment"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Logout"} />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)`, lg: "100%" },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "text.primary",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
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
          <Links to="/dashboard">
            <Typography variant="button" component="div" sx={{ flexGrow: 1 }}>
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
            <Links to="#">
              <Typography variant="button" component="div" sx={{ flexGrow: 1 }}>
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
            <a href="/" style={{ textDecoration: "none" }}>
              <Button
                onClick={logoutUser}
                variant="contained"
                sx={{ backgroundColor: "white", color: "blue" }}
              >
                Logout
              </Button>
            </a>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} // todo zindex
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* todo */}
        <Switch>
          <PrivateRoute exact path={path}>
            {checkUser?.role === "admin" ? <AdminHome /> : <DashboardHome />}
          </PrivateRoute>
          <PrivateRoute path={`${path}/myorders`}>
            <MyOrder />
          </PrivateRoute>
          <PrivateRoute path={`${path}/review`}>
            <Review />
          </PrivateRoute>
          <PrivateRoute path={`${path}/payment`}>
            <Payment />
          </PrivateRoute>
          <PrivateRoute path={`${path}/allusers`}>
            <AllUsers />
          </PrivateRoute>
          <PrivateRoute path={`${path}/allorders`}>
            <AllOrders />
          </PrivateRoute>
          <PrivateRoute path={`${path}/addproduct`}>
            <AddProduct />
          </PrivateRoute>
          <PrivateRoute path={`${path}/makeadmin`}>
            <MakeAdmin />
          </PrivateRoute>
        </Switch>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
