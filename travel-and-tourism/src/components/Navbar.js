import React , { useState} from 'react'
import '../css/NavbarStyles.css'
import {HiSearch} from 'react-icons/hi'
import {BsPerson} from 'react-icons/bs'
import {BiMenu} from 'react-icons/bi'
import {FaFacebook,FaInstagram,FaTwitter,FaPinterest,FaYoutube} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-scroll'


function Navbar() {
  const[nav , setNav] = useState(false)
  
  const HandleNav = () => {
    setNav(!nav)
  }

  return (
    <div  name ='home' className= {nav ? 'navbar navbar-bg' :'navbar'}>
        <div className={ nav ? 'logo dark' : 'logo'}>
            <h2>Travel</h2>
            </div>
            <ul className ='nav-menu'>
                <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                <Link to=''smooth={true} duration={500}><li>About</li></Link>
                <Link to='destinations'smooth={true} duration={500}><li>Destinations</li></Link>
                <Link to='carousel'smooth={true} duration={500}><li>Travel</li></Link>
                <Link to='book'smooth={true} duration={500}><li>Book</li></Link>
                <Link to='views'smooth={true} duration={500}><li>Views</li></Link>
             </ul>
            <div className ='nav-icons'>
                <HiSearch className ='icon' style = {{marginRight :'1rem'}}/>
                <BsPerson className ='icon'/>

            </div>
            <div className ='menu' onClick={HandleNav}>
            {!nav ? (<BiMenu className ='icon'/> ):(  <AiOutlineClose style={{color:'#000'}} className='icon'/> ) }
           </div>
            <div className= { nav ? 'mobile-menu active': 'mobile-menu'}>
            <ul className ='mobile-nav'>
                <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                <Link to='' smooth={true} duration={500}><li>About</li></Link>
                <Link to='destinations'smooth={true} duration={500}><li>Destinations</li></Link>
                <Link to='carousel'smooth={true} duration={500}><li>Travel</li></Link>
                <Link to='book'smooth={true} duration={500}><li>Book</li></Link>
                <Link to='views'smooth={true} duration={500}><li>Views</li></Link>
            </ul>
            <div className='mobile-menu-bottom'>
              <div className='menu-icons'>
                <button>Search</button>
                <button>Account</button>
              </div>
              <div className='social-icons'>
                <FaFacebook className='icon'/>
                <FaInstagram className='icon'/>
                <FaTwitter className='icon'/>
                <FaPinterest className='icon'/>
                <FaYoutube className='icon'/>
              </div>

            </div>
              
            </div>
    </div>
  )
}

export default Navbar