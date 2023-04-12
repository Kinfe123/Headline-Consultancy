import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='contact-us'>
        <h1>Ping <span className="gradient__text">Us.</span> 🍾</h1>
        <div className="underline"></div>
   
        
        
        <div className='contact-us-form'>
            <input type='email' className='email' placeholder='✉️ Email' />

            <div className='names'>
                <div>
                 <input type='text' className='first_name' placeholder='🧔Fisrt Name' />

                </div>
                <div>
                 <input type='text' className='second_name' placeholder='🧔 Second Name' />

                </div>

                




                
            </div>

            <textarea  placeholder='💬 Put your thoughts here' className='text-area'/>
            
            
        </div>

         <button className='btn'> 🪧 Contact Us</button>

    </div>
  )
}

export default Contact