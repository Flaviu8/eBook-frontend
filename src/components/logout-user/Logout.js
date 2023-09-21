import React, { useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const navigate = useNavigate();

// Logout function
const handleLogout = useCallback(async () => {
  try { 
    // Only allow logout if the user is logged in
    await axios.post("http://localhost:8000/logout", null, {
      withCredentials: true, // Include cookies in the request
    });
    navigate('/logout');
  } catch (error) {
    console.error("Error logging out:", error);
  }
}, [navigate]);


  // Render the "Logout" button only if the user is logged in
  return (
   <div>
        <button onClick={handleLogout}>Log Out </button>
  </div>
  ) 
}
