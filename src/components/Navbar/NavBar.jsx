import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { pictures } from '../../assets/pictures';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const [menu, setMenu] = useState("false");


  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={pictures.ThaiCafeLogo} alt=""/>
      </div>
      <div className="navbar-right">
         <ul className="navbar-menu">
            <Link to='/' onClick={() => setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href="#menu" onClick={() => setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a href="#contact" onClick={() => setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</a>
        </ul>
      </div>
          
    </div>
  );
};

export default Navbar;
