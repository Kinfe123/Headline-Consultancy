import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Choose from './Choose'
import Feature from './Feature'
import WorkingFeature from './WorkingFeature'
import Study from './Study'
import GalleryShow from './Gallery'
import Contact from './Contact'
import Testimonials from './Testimonial'
import Footer from './Footer'
import Members from './Member'

function HomePage() {
  return (
  
    <div>
      <Navbar />
      <Hero />

      {/* <Partner />  */}
      <Choose />
      <Feature />
      <WorkingFeature />
      
      <Study />
     


      <GalleryShow />

      <Contact />
      <Testimonials />

      <Footer />


    </div>
  )
}

export default HomePage