// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// function Navbar() {
//   const navigate = useNavigate()
//   const [toogle , setToogler] = useState(false)
//   const handleClick = () => {
//     navigate('/form')
//   }
//   return (
    // <div className='nav-bar-container'>
    //     <div className='nav-bar-elements'>
    //         <div className='elements'>
    //         <div>
    //         <ul>

    //             <li><a href='#' className='active'>Home</a></li>
    //             <li><a href='#'>Pricing</a></li>
    //             <li><a href='#'>Carrers</a></li>
    //             <li><a href='#'>Testimonial</a></li>
    //             <li><a href='#'>Out Team</a></li>
    //            <span>|</span>
    //             <button className='get-started' onClick={handleClick}>Get started</button>
    //         </ul>

    //         </div>
    //         </div>

    //     </div>
        
    // </div>
 import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          
          {/* <img src={logo} /> */}
          {/*A place for logos */}
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#choose">Why Us?</a></p>
          <p><a href="#study">Study</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#contact">contact</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">Why Us?</a></p>
            <p><a href="#possibility">Features </a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Travels</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

