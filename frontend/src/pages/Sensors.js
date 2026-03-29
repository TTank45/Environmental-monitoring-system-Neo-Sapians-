import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Box, Typography, Toolbar } from "@mui/material";

const Sensors = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Toolbar />
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4">Sensors Page</Typography>
          <Typography>Here you can manage individual sensors, view history, or configure alerts.</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Sensors;