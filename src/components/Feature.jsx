import React from 'react';
import './Feature.css';
import { useNavigate } from 'react-router-dom';

const Feature = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/form')
  }
  return (
    <div className="cta">
      <div className="cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>
      <div className="cta-btn">
        <button type="button" onClick={handleClick}>Get Started</button>
      </div>
  </div>
  )
}

export default Feature;
