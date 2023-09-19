import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // // Check the user's login status when the component mounts
  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       // Make a request to your server to check if the user is logged in
  //       const response = await axios.get("http://localhost:8000/get-details");

  //       console.log(response)

  //       if (response.data.authenticated) {
  //         // User is logged in
  //         setIsLoggedIn(true);
  //       } else {
  //         // User is not logged in
  //         setIsLoggedIn(false);
  //       }
  //     } catch (error) {
  //       // An error occurred, handle it appropriately
  //       console.error("Error checking login status:", error);
  //       setIsLoggedIn(false);
  //     }
  //   };

  //   checkLoginStatus();
  // }, []);

  // Logout function
  const handleLogout = useCallback(async () => {
    try { 
        // Only allow logout if the user is logged in
        await axios.post("http://localhost:8000/logout");
        navigate('/logout');
      }
     catch (error) {
      console.error("Error logging out:", error);
    }
  }, [navigate, isLoggedIn]);

  // Render the "Logout" button only if the user is logged in
  return (
    <button onClick={handleLogout}>Logout</button>
  ) 
}
