import React from 'react'
import Typewriter from 'typewriter-effect'
function Hero() {

  return (
    <div className='hero-container'>
        <div className='hero-elements'>
            <h4> 🚀 Welcome to <span className='headline'>HeadLine Consultancy</span> for hand to hand growth.</h4>
             <div className='effect'>
             <Typewriter
  onInit={(typewriter) => {
  typewriter.typeString('Let us make your dreams come true!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
      .callFunction(() => {
        
      })
      .start();
  }}
/>
             </div>
            <div className='input-container'>
                <input type='text' placeholder='share your thoughts'  />
                <button className='btn'>Lets Talk!</button>
            </div>

        </div>
        


    </div>
  )
}

export default Hero