import React from 'react'
import './style.css'


const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="#">Home </a>
            <a href="#">Sign Up </a>
            <a href="#">Nearby Listings</a>
        </nav>
        <div>
            Social Media Icon Placeholders
        </div>
    </header>
   )

 }

export default Header;