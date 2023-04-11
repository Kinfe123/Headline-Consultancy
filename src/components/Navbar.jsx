import React from 'react'

function Navbar() {
  return (
    <div className='nav-bar-container'>
        <div className='nav-bar-elements'>
        
        {/* <h1>HEADLINE CONSULTANCY FOR GROWTH.</h1> */}
            <div className='elements'>
        

            <div>

            <ul>

                <li><a href='#' className='active'>Home</a></li>
                <li><a href='#'>Pricing</a></li>
                <li><a href='#'>Carrers</a></li>
                <li><a href='#'>Testimonial</a></li>
                <li><a href='#'>Out Team</a></li>
               <span>|</span>
                <button className='get-started'>Get started</button>
            </ul>

            </div>
            </div>

        </div>
        
    </div>
  )
}

export default Navbar