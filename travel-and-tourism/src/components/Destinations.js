import '../css/DestinationStyles.css'
import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import AndamanAndNicobar from '../assets/Andaman And Nicobar.jpg'
import Maldives from '../assets/maldives.jpg'
import Phuket from '../assets/Phuket.jpg'
import KeyWest from '../assets/keywest.jpg'


function Destinations() {
  return (
    <div  name='destinations' className='destinations'>
        <div className='container'>
          <h1>All-Inclusive Resorts</h1>
          <div className='img-container'>
            <img  className='span-3 image-grid-row-2' src ={BoraBora} alt ='/' />
            <img src ={AndamanAndNicobar} alt ='/' />
            <img src ={Maldives} alt ='/' />
            <img src ={Phuket} alt ='/' />
            <img src ={KeyWest} alt ='/' />
            
          </div>

        </div>
    </div>
  )
}

export default Destinations