import React from 'react';
// import gpt3Logo from '../../logo.svg';
import './Footer.css';
import {AiFillFacebook , AiFillInstagram , AiFillTwitterCircle ,AiFillYoutube } from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
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
        <p>📞 0910017892 / 0922572829</p>
        <p> 📧 headwayconsultancy113@gmail.com</p>
      </div>
    </div>
      <div className='text-findus'>
        <p>Find Us Here</p>
      </div>
    <div className="developed size">
      <a href="https://facebook.com/">

        <AiFillFacebook size={35}/>
      </a>
      <a href="https://instagram.com/head_way_travel_firm ">
        <AiFillInstagram size={35}/>

      </a>
      <a href="https://twiiter.com/headway_educationalconsultancy">
        <AiFillTwitterCircle size={35}/>

      </a>
      <a href="https://youtube.com/headway_educationalconsultancy">

        <AiFillYoutube size={40}/>
      </a>
      <a href="https://t.me/headway_educationalconsultancy">
        
      <BsTelegram size={35}/>
      </a>
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
