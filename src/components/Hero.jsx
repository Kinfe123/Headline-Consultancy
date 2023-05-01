import React from 'react'
import Typewriter from 'typewriter-effect'
import { useNavigate } from 'react-router-dom'
function Hero() {

  const navigate = useNavigate()


  const handleClick = () => {
    navigate('/form')

  }
  return (
    <div className='hero-container'>
        <div className='hero-elements'>
            <h4> 🚀 Welcome to <span className='headline'>HeadWay Consultancy</span> for hand to hand growth.</h4>
             <div className='effect'>
             <Typewriter
             autoStart={true}
      onInit={(typewriter) => {
      typewriter.typeString('Let us make your dreams come true!')
          .callFunction(() => {
          
          })
          .pauseFor(1000)
          .deleteAll()
          .callFunction(() => {
            
          })
          .start();
      }}
/>
             </div>
            <div className='input-container'>
              
              

                <button className='btn' onClick={handleClick}>Get Started!</button>
                <button className='btn active' onClick={() => navigate('/learn-more')}>Learn More!</button>
                {/* <input type='text' placeholder='share your thoughts'  /> */}
              
            </div>

        </div>
        


    </div>
  )
}

export default Hero