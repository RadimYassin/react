import React from 'react'
import Hero from '../Component/Hero'
import Navbar from '../Component/NavBar/Navbar'
import image from '../assest/2.jpg'
function Homme() {
  return (
    <>
    <Navbar/>
    <Hero cDiv="classDiv" image={image}  cText="hero" h1="Your Journey is Your Strory " p="chose your destination" />
   
    </>
  
  )
}

export default Homme
