import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SensorsIcon from "@mui/icons-material/Widgets";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 220,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: 220, boxSizing: "border-box", paddingTop: 2 },
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        SiteHive
      </Typography>
      <List>
        <ListItem button onClick={() => navigate("/")}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => navigate("/dashboard")}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => navigate("/sensors")}>
          <ListItemIcon><SensorsIcon /></ListItemIcon>
          <ListItemText primary="Sensors" />
        </ListItem>
        <ListItem button onClick={() => navigate("/settings")}>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;