import React from 'react'
import './style.css'
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="#">Home </a>
            <a href="#">My Blogs </a>
            <a href="#">Post </a>
            <a href="#">Listings </a>
        </nav>
        <div>
            Icon Links
        </div>
    </header>
   )

 }

export default Header;