import React from 'react'
import Logo from './kik-final-logo.png';
import { Link } from 'react-router-dom'
import './Home.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={Logo} alt="logo" />
            <h4>KodeinKGP</h4>
        </div>
        <div className="links">
            <span className='link-tag'>
                <Link className='link' to="/">Home</Link>
            </span>
            <span className='link-tag'>
                <Link className='link' to="/pds">QnAPage</Link>
            </span>
            <span className='link-tag'>
                <Link className='link' to="/teams">Teams</Link>
            </span>
            <span className='link-tag'>
                <Link className='link' to="/events">Events</Link>
            </span>
            {/* <div className="animation nav-links"></div> */}
        </div>
    </div>
  )
}

export default Navbar