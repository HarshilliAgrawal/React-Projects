import React from "react";
import Destinations from "./components/Destinations";
import Hero from "./components/Hero";
import ImgCarousel from "./components/ImgCarousel";
import  Navbar from "./components/Navbar";
import Search from "./components/Search";
import Selects from "./components/Selects";
import Footer from './components/Footer'



function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Destinations/>
     <Search/>
     <Selects/>
     <ImgCarousel/>
     <Footer/>
    </div>
  );
}

export default App;
