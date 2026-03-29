import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Box, Typography, Button, Toolbar, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Toolbar />
        <Box sx={{ padding: 3 }}>
          <Typography variant="h3" gutterBottom>
            Environmental Monitoring System
          </Typography>
          <Typography variant="h6" gutterBottom>
            Monitor noise, dust, and vibration levels in real-time.
          </Typography>
          <Button variant="contained" color="primary" onClick={() => navigate("/dashboard")}>
            Go to Dashboard
          </Button>

          <Box sx={{ marginTop: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6">Project Overview</Typography>
                <Typography>
                  This project monitors environmental sensors and provides live readings for noise, dust, and vibration.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;