import "./NavbarStyles.css";
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from "react";
import Intro from '../assets/logo.jpg';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const chnageColor = () => {
      if(window.scrollY >= 1){
        setColor(true);
      } else {
        setColor(false);
      }
    };

  window.addEventListener("scroll", chnageColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
      <img  className="logo" source src={Intro} alt="Alternative text for hero image" />
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/project">Work</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
            <FaTimes size={20} style={{ color:"#fff" }}/>
        ) : (
            <FaBars size={20} style={{ color:"#fff" }}/>
        )}
      </div>
    </div>
  )
}

export default Navbar
