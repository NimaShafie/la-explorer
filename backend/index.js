// index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample endpoint for activities
app.get("/api/activities", (req, res) => {
  // In a real application, data would be fetched from a database (e.g., Firebase Firestore)
  const activities = [
    { name: "Explore Santa Monica Beach", lat: 34.0095, lng: -118.4973 },
    { name: "Walk the Santa Monica Pier", lat: 34.0100, lng: -118.4950 },
    // Add more sample activities as needed
  ];
  res.json(activities);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
