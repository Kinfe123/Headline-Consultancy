import React from 'react'
import Typewriter from 'typewriter-effect'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
function Hero() {
  const user = useUser()

  const navigate = useNavigate()


  const handleClick = () => {
    navigate('/form')

  }
  return (
    <div className='hero-container'>
        <div className='hero-elements'>
            <h4> 🚀 Welcome <span className='gradient__text'> {user.isSignedIn ? user.user.firstName : ""}</span> to <span className='headline'>HeadWay Travel and Educational Consultancy</span> for hand to hand growth.</h4>
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
                <button className='btn active' onClick={() => window.location.href = "https://t.me/headway_educationalconsultancy"}>Learn More!</button>
                {/* <input type='text' placeholder='share your thoughts'  /> */}
              
            </div>

        </div>
        


    </div>
  )
}

export default Hero