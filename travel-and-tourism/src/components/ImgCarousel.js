import React from 'react'
import '../css/ImgCarouselStyles.css'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import AndamanAndNicobar from '../assets/Andaman And Nicobar.jpg'

function ImgCarousel() {
  return (
    <div name='carousel' className='container'>
    <Carousel className='carousel'  showArrows={true} autoPlay={true} infiniteLoop={true}>
    <div>
        <img src={BoraBora} alt='/'/>
    </div>
    <div>
        <img src={BoraBora2}  alt='/'/>
    </div>
    <div>
        <img src={AndamanAndNicobar} alt='/'/>
    </div>
</Carousel>
</div>
    
  )
}

export default ImgCarousel