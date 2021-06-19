import React from 'react'
import './style.css'


const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="#">Home </a>
            <a href="#">Search </a>
            <a href="#">Blog </a>
            <a href="#">Products </a>
        </nav>
        <div>
            Sign Up
        </div>
    </header>
   )

 }

export default Header;