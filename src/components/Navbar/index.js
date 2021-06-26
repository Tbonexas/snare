import React, {useState} from 'react';
import './style.css';
import icon from '../../assets/icons/icon.png'


/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

  const [search,setSearch] = useState(false)


  const submitSearch =(e) => {
    e.preventDefault();
    alert('Searched')
  }

  const openSearch =() => {
    setSearch(true);
  }

  const searchClass= search ? 'searchInput active' : 'searchClass';

  return(
    <div className="navbar">
        <ul className='navbarMenu'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Search</a></li>
            <li><a href='#'>Blogs</a></li>
            <li><a href='#'>About us</a></li> 
        </ul>
        <div className='search'>
          <form onSubmit={submitSearch}>
            <input type="text" className={searchClass} placeholder="Locations"/>
            <img onClick={openSearch} className="searchIcon" src={icon} alt="Search"/>
          </form>
            
        </div>
    </div>
   )

 }

export default Navbar;