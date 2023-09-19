import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './components/login-user/Login';
import Signup from './components/create-account-user/Signup';
import Dashboard from './components/dashboard-user/Dashboard';
import LogoutPage from './pages/LogoutPage/LogoutPage';

function App() {
  return (
    <div className="App">
      <Navbar />
         <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={ <Login />} />
              <Route path="/signup" element={ <Signup />} />    
              <Route path="/dashboard" element={ <Dashboard />} />  
              <Route path="/logout" element={ <LogoutPage />} /> 
          </Routes>
    </div>
  );
}

export default App;
