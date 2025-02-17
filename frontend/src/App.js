// App.js
import React, { useState, useEffect } from "react";
import MapView from "./components/MapView";
import "./App.css";

function App() {
  const [userLocation, setUserLocation] = useState(null);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Request user geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error retrieving location", error);
          // Default to Santa Monica if geolocation fails
          setUserLocation({
            lat: 34.0195,
            lng: -118.4912,
          });
        }
      );
    } else {
      // Browser does not support geolocation
      setUserLocation({
        lat: 34.0195,
        lng: -118.4912,
      });
    }
  }, []);

  useEffect(() => {
    // Fetch activities data
    // For demonstration, using static sample data.
    // You can later replace this with a call to your backend endpoint.
    const sampleActivities = [
      { name: "Explore Santa Monica Beach", lat: 34.0095, lng: -118.4973 },
      { name: "Walk the Santa Monica Pier", lat: 34.0100, lng: -118.4950 },
    ];
    setActivities(sampleActivities);
  }, []);

  return (
    <div className="App">
      <h1>LA Explorer</h1>
      {userLocation ? (
        <MapView userLocation={userLocation} activities={activities} />
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
}

export default App;
