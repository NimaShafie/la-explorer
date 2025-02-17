# LA Explorer

### By: Nima Shafie, x, x, x

## Description

**LA Explorer** is a location-based activity discovery platform designed to help locals and tourists explore curated experiences in Los Angeles. Built using React, Node.js/Express, and Firebase, the application leverages Mapbox to provide an interactive map-based interface. Users can view nearby activities, get directions, and discover new places in a seamless, engaging manner.

## Installation

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)
- A Mapbox account and API key

### Frontend Setup

1. **Navigate to the `frontend` folder:**
   ```bash
   cd frontend
   ```
2. ***Install the dependencies:***
    ```bash
    npm install
    ```
3. ***Set up your environment variables:***
    Create a .env file in the frontend folder.
    Add your Mapbox API key:
    ```
    REACT_APP_MAPBOX_TOKEN=see_nima_for_mapbox_api_key
    ```

### Backend Setup
1. **Navigate to the `backend` folder:**
    ```bash
    cd backend
    ```
2. **Install the dependencies:**
    ```bash
    npm install
    ```

### Running the Project Locally

## Starting the Backend Server

1. **From the `backend` folder, run:**
   ```bash
   npm start
   ```
The backend server will start on port 5000 by default.

### Starting the Frontend Development Server

1. **From the `frontend` folder, run:**
   ```bash
   npm start
   ```
2. **The React application should open in your default browser.**

-----------------------

## Current Features
* Interactive Map with Mapbox: <p>
Displays user location and activity markers on an interactive map.

* Geolocation Detection: <p>
Requests user location on load to center the map and provide relevant activity suggestions.

* Activity Markers: <p>
Sample activities are displayed as markers on the map.

* Responsive Design: <p>
The app adjusts to various screen sizes for a consistent experience.

-----------------------

## Features Still Needed
* User Authentication: <p>
Integration with Firebase to allow secure user sign-in and profile management.

* Dynamic Activity Data Management: <p>
Connect the frontend with a real database (Firebase Firestore) to fetch and update activities dynamically.

* User-Generated Content & Moderation: <p>
Enable users to submit new activities and include an admin/moderator review workflow.

* Route Optimization: <p>
Provide optimized routes for navigating between multiple activities.

* Public Transit Integration: <p>
Integrate a transit API (e.g., Google Maps Directions API) to offer public transportation directions.

* Enhanced Filtering and Sorting: <p>
More detailed filters (e.g., by category, popularity, or proximity) for user-friendly navigation.

* AI-Generated Suggestions: <p>
Utilize AI to generate creative and engaging activity recommendations and descriptions.

-----------------------

## Future Updates
* Mobile Application Support: <p>
Port the web application to iOS using React Native, ensuring cross-platform functionality.

* Push Notifications: <p>
Implement notifications for updates, new activities, or user-specific alerts.

* Improved UI/UX: <p>
Further refine the design, user interactions, and overall user experience based on feedback.

* Community Features: <p>
Introduce reviews, ratings, and social sharing features to foster a community around local activities.

* Partnerships with Local Businesses: <p>
Integrate with local businesses for promotions, exclusive deals, and enhanced activity details.