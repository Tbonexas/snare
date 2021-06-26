import React from 'react'
import './style.css'


const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="#">Home </a>
            <a href="#">Public Listings </a>
            <a href="#">Blogs </a>
            <a href="#">Contact Us </a>
        </nav>
        <div>
            Social Media Icon Placeholders
        </div>
    </header>
   )

 }

export default Header;