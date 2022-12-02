import React from 'react'
import '../css/HeroStyles.css'
import Video from '../assets/maldivesVideo2.mp4'
import {HiSearch} from 'react-icons/hi'

function Hero() {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={Video} type='video/mp4'/>
        </video>
        <div className='overlay'></div>
        <div className='content'>
          <h1>Your Journey Your Story</h1>
          <h3>Choose Your Favourite Destination.</h3>
          <form className='form'>
            <div>
              <input type ='text' placeholder='Search Destination'/>
              </div>
            <div>
              <button><HiSearch className ='icon'/></button>
              </div>
          </form>
        </div>
    </div>
  )
}

export default Hero