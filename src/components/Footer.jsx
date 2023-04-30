import React from 'react';
// import gpt3Logo from '../../logo.svg';
import './Footer.css';

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>



    <div className="footer-links">
      <div className="footer-links_logo">
        {/* <img src={gpt3Logo} alt="gpt3_logo" /> */}
        <p>HEADWAY CONSULTANCY <br /> All Rights Reserved</p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>📍 Ethiopia , Addis Ababa</p>
        <p>📞 085-132567</p>
        <p>📧 contact@headwayconsultancy.com</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p> &copy;  {new Date().getUTCFullYear()} HEADWAY CONSULTANCY. All rights reserved.</p>
    </div>
    <div className='kinfish'>
      <p className='developed'>Developed and Designed with 💚 by 👉 <a href="https://bit.ly/KINFISHTECH">KINFEMICHAEL TARIKU</a></p>

    </div>
  </div>
);

export default Footer;
