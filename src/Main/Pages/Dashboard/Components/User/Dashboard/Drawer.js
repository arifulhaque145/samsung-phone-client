import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import PaymentIcon from "@mui/icons-material/Payment";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { CircularProgress } from "@mui/material";
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
import useAuth from "../../../../../Hooks/useAuth";
import PrivateRoute from "../../../../../Routes/PrivateRoute";
import Payment from "../../Shared/Payment";
import Review from "../../Shared/Review/Review";
import MyOrder from "../../User/Order/MyOrder";
import DashboardHome from "./DashboardHome";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  let { path } = useRouteMatch();
  const { isLoading, logoutUser } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const history = useHistory();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 100,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button onClick={() => history.push(`${path}/myorders`)}>
          <ListItemIcon>
            <BookmarkBorderIcon />
          </ListItemIcon>
          <ListItemText primary={"My Orders"} />
        </ListItem>
        <ListItem button onClick={() => history.push(`${path}/review`)}>
          <ListItemIcon>
            <ReviewsIcon />
          </ListItemIcon>
          <ListItemText primary={"Review"} />
        </ListItem>
        <ListItem button onClick={() => history.push(`${path}/payment`)}>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary={"Payment"} />
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
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }} // todo zindex
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
          <PrivateRoute exact path={path}>
            <DashboardHome />
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
        </Switch>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
