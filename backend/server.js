const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// This route sends sample sensor data
app.get("/", (req, res) => {
  const now = new Date();
  const timeLabel = now.getHours() + ":" + now.getMinutes();

  const sensorData = [
    { time: timeLabel, noise: Math.floor(Math.random() * 20 + 50), dust: Math.floor(Math.random() * 20 + 25), vibration: Math.floor(Math.random() * 10 + 10) },
  ];

  res.json(sensorData);
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});