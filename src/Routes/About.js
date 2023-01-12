import React from 'react'
import Hero from '../Component/Hero'
import Navbar from '../Component/NavBar/Navbar'
import image from '../assest/4.jpg'
function About  ()  {
  return (
    <>
    <Navbar/>
    <Hero cDiv="classDiv" image={image}  cText="" h1="Why do we use it? " p="ed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum " />
     
    
    </>
  )
}

export default About
