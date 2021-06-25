import React from 'react';
import './style.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
    <div className="navbar">
        <ul className='navbarMenu'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Search</a></li>
            <li><a href='#'>Blogs</a></li>
            <li><a href='#'>About us</a></li>
        </ul>
        <div>
            <input />
            <img src={require('../../assets/icons/searchbtn.png')} alt='Search' />
        </div>
    </div>
   )

 }

export default Navbar;