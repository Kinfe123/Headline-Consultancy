import React from 'react'
import {Gallery} from 'react-grid-gallery'
import { images } from '../constants/images'
import './Gallery.css'

function GalleryShow() {
  return (
    <>
    <div className="parent">
        <h1>Travel With <span className="gradient__text">Us.</span></h1>
        <div className="underline"></div>
    </div>
    <div className='gallery'>
       
        <Gallery images={images} className="gallary"/>
        
    </div>
    </>
  )

}

export default GalleryShow