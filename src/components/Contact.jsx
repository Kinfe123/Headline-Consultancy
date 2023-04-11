import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='contact-us'>
        <div className='parent'>
        <h1>Get Free  <span className='color-us'>Consulting</span> 🍾</h1>
        <div className="underline"></div>
        </div>
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


    </div>
  )
}

export default Contact