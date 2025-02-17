// src/components/MapView.js
import React, { useState } from "react";
import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const MapView = ({ userLocation, activities }) => {
  const [viewport, setViewport] = useState({
    latitude: userLocation?.lat || 34.0195, // defaults to Santa Monica
    longitude: userLocation?.lng || -118.4912,
    zoom: 12,
  });

  return (
    <Map
      {...viewport}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onMove={(evt) => setViewport(evt.viewState)}
      style={{ width: "100vw", height: "100vh" }} 
    >
      {activities.map((activity, index) => (
        <Marker key={index} latitude={activity.lat} longitude={activity.lng}>
          <div
            style={{
              background: "red",
              borderRadius: "50%",
              width: "10px",
              height: "10px",
            }}
            title={activity.name}
          />
        </Marker>
      ))}
    </Map>
  );
};

export default MapView;
