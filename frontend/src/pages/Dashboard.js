import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Box, Card, CardContent, Grid, Typography, Toolbar } from "@mui/material";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Title, Tooltip);

function Dashboard() {
  const [data, setData] = useState([]);

  // Fetch live data every 3 seconds
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:5000")
        .then((res) => {
          setData((prevData) => {
            const newData = [...prevData, ...res.data];
            return newData.slice(-20); // Keep last 20 readings
          });
        })
        .catch((err) => console.error(err));
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  const latest = data[data.length - 1] || { noise: 0, dust: 0, vibration: 0 };

  const chartData = (label, metric, color) => ({
    labels: data.map((d) => d.time),
    datasets: [
      {
        label,
        data: data.map((d) => d[metric]),
        borderColor: color,
        fill: false,
        tension: 0.2,
      },
    ],
  });

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Toolbar /> {/* Push content below navbar */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" gutterBottom>
            Monitoring Dashboard
          </Typography>

          {/* Sensor Cards with Alerts */}
          <Grid container spacing={2} sx={{ marginBottom: 3 }}>
            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  backgroundColor: latest.noise > 65 ? "#e57373" : "#4db6ac",
                  color: "white",
                }}
              >
                <CardContent>
                  <Typography variant="h6">Noise Level</Typography>
                  <Typography variant="h4">{latest.noise} dB</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  backgroundColor: latest.dust > 40 ? "#e57373" : "#f06292",
                  color: "white",
                }}
              >
                <CardContent>
                  <Typography variant="h6">Dust Level</Typography>
                  <Typography variant="h4">{latest.dust} µg/m³</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  backgroundColor: latest.vibration > 15 ? "#e57373" : "#ffb74d",
                  color: "white",
                }}
              >
                <CardContent>
                  <Typography variant="h6">Vibration</Typography>
                  <Typography variant="h4">{latest.vibration} mm/s</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Multi Real-Time Charts */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Noise Over Time
                  </Typography>
                  <Line data={chartData("Noise Level", "noise", "rgba(75,192,192,1)")} />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Dust Over Time
                  </Typography>
                  <Line data={chartData("Dust Level", "dust", "rgba(255,99,132,1)")} />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Vibration Over Time
                  </Typography>
                  <Line data={chartData("Vibration", "vibration", "rgba(255,206,86,1)")} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;