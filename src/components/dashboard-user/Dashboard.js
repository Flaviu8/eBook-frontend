import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function Dashboard() {
    const [data, setData] = useState('');
   

    useEffect(() => {
      const fetchData = async () => {
        try {
        

          // Make a request to your server to check if the user is logged in
          const response = await axios.get('http://localhost:8000/user-info', {
         
        });
          console.log(response)
  
      
        } catch (error) {
          // An error occurred, handle it appropriately
          console.error("Error checking login status:", error);
    
        }
      };
  
      fetchData();
    }, []);


  return (
    <div className='dashboard_main'>
        <h1>Dashboard</h1>
        <div>
          <h1>Welcome {data.username}</h1>
        </div>
    </div>
  )
}

