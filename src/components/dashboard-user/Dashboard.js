import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Dashboard() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {

        // Make a GET request to fetch user information with the JWT token
        const response = await axios.get('http://localhost:8000/user', {
          withCredentials: true, // Send cookies with the request
        });

        // Assuming the response data contains user information
        const userData = response.data;

        // Update the user state with the fetched data
        setUser(userData);
      } catch (error) {
        // An error occurred, handle it appropriately
        console.error('Error fetching user information:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard_main">
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <h1>Welcome {user.user.username}</h1>
          {/* Render other user information as needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
