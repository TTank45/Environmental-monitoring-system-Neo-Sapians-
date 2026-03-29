import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201, marginLeft: 220 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          SiteHive Monitoring
        </Typography>
        <Box>
          <IconButton color="inherit"><NotificationsIcon /></IconButton>
          <IconButton color="inherit"><AccountCircleIcon /></IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;