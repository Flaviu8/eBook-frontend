import React from 'react'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import Logout from '../logout-user/Logout'
import LogoutButton from '../logout-user/Logout'

export default function Navbar() {
  const navigate = useNavigate()

  const handleSign = ()=> {
    navigate('/signup')
  }

  const handleLogin = () => {
    navigate("/login")
  }

  return (
    <>
    <div className='header'>
        <div className='navbar'>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
               <li>
                <Link href="/about">About</Link>
               </li>
               <li>
                <Link href="/contact">Contact Us</Link>
               </li>
            </ul>
            <div className='buttons_form'>
            <button onClick={handleSign}>Sign Up</button>
            <button onClick={handleLogin}>Login</button>
            < LogoutButton />
            </div>
        </div>

    </div>
    
    </>
  )
}
