import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import * as React from "react";
import { Switch, useHistory, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AdminRoute from "../../../Routes/AdminRoute";
import AdminHome from "../Components/Admin/AdminHome";
import AddProduct from "../Components/Admin/Components/AddProduct";
import AllOrders from "../Components/Admin/Components/AllOrders";
import AllUsers from "../Components/Admin/Components/AllUsers";
import MakeAdmin from "../Components/Admin/Components/MakeAdmin";

const drawerWidth = 240;

function AdminDrawer(props) {
  let { path } = useRouteMatch();
  const { logoutUser, isLoading } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const history = useHistory();

  if (isLoading) {
    return <p></p>;
  }

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
            <AdminPanelSettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Make Admin"} />
        </ListItem>
        <ListItem button onClick={() => history.push(`${path}/allusers`)}>
          <ListItemIcon>
            <PeopleAltIcon />
          </ListItemIcon>
          <ListItemText primary={"All Users"} />
        </ListItem>
        <ListItem button onClick={() => history.push(`${path}/allorders`)}>
          <ListItemIcon>
            <BookmarkBorderIcon />
          </ListItemIcon>
          <ListItemText primary={"All Orders"} />
        </ListItem>
        <ListItem button onClick={() => history.push(`${path}/addproduct`)}>
          <ListItemIcon>
            <ProductionQuantityLimitsIcon />
          </ListItemIcon>
          <ListItemText primary={"Add Product"} />
        </ListItem>
        <ListItem button onClick={logoutUser}>
          <ListItemIcon>
            <LogoutIcon />
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
        <Switch>
          <AdminRoute exact path={path}>
            <AdminHome />
          </AdminRoute>
          <AdminRoute path={`${path}/allusers`}>
            <AllUsers />
          </AdminRoute>
          <AdminRoute path={`${path}/allorders`}>
            <AllOrders />
          </AdminRoute>
          <AdminRoute path={`${path}/addproduct`}>
            <AddProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/makeadmin`}>
            <MakeAdmin />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

AdminDrawer.propTypes = {
  window: PropTypes.func,
};

export default AdminDrawer;
