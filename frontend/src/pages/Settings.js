import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Box, Typography, Toolbar, Card, CardContent } from "@mui/material";

const Settings = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Toolbar />
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" gutterBottom>
            Settings / About
          </Typography>

          <Card sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h6">Sensor Thresholds</Typography>
              <Typography>
                Noise Alert: &gt; 65 dB <br />
                Dust Alert: &gt; 40 µg/m³ <br />
                Vibration Alert: &gt; 15 mm/s
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6">Project Info</Typography>
              <Typography>
                This project is a university assignment to monitor environmental sensors in real-time using Node.js, React, and Chart.js.  
                It includes live dashboards, alerts, and historical data visualization.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;