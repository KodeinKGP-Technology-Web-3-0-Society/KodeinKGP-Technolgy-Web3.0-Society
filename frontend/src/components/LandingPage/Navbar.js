import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src="https://hoooobank.netlify.app/assets/logo.efc6c435.svg" alt="logo" />
        </div>
        <div className="links">
            <span className='link-tag'>
                <Link className='link' to="/">Home</Link>
            </span>
            <span className='link-tag'>
                <Link className='link' to="/qna">QnAPage</Link>
            </span>
            <span className='link-tag'>
                <Link className='link' to="/teams">Teams</Link>
            </span>
            <span className='link-tag'>
                <Link className='link' to="/footer">Contact Us</Link>
            </span>
            {/* <div className="animation nav-links"></div> */}
        </div>
    </div>
  )
}

export default Navbar