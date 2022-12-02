import React from 'react'
import '../css/SelectStyles.css'
import SelectsImg from './SelectsImg'

import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import AndamanAndNicobar from '../assets/Andaman And Nicobar.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives4.jpg'
import Phuket from '../assets/Phuket.jpg'
import KeyWest from '../assets/keywest.jpg'

function Selects() {
  return (
    <div name='views' className='selects'>
    <div className='container'>
        <SelectsImg bgImg={BoraBora} text='Bora Bora' />
        <SelectsImg bgImg={BoraBora2} text='Emerald Bay' />
        <SelectsImg bgImg={AndamanAndNicobar} text='Andaman And Nicobar' />
        <SelectsImg bgImg={Maldives} text='Maldives' />
        <SelectsImg bgImg={Maldives2} text='Grenada' />
        <SelectsImg bgImg={Phuket} text='Phuket' />
        <SelectsImg bgImg={KeyWest} text='Key West' />
    </div>

</div>
  )
}

export default Selects