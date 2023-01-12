import React from 'react'
import './heroStyle.css'

function Hero(props) {
  return (
    <div className={props.cDiv}>
      <img  src={props.image} alt="image" style={{"height":"550px","width":"100%"}} />
      <div className={props.cText}>
        <h1>{props.h1}</h1>
        <p>{props.p} </p>
        <a href='/'>Travel plan</a>
      </div>
    </div>
  )
}

export default Hero
