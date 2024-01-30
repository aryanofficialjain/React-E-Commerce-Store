import React from 'react'
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2><span style={{color:'white', background:"black", padding:'7px', borderRadius:"10px"}}>New</span> Collections</h2>
            <p>Wear your Confidence</p>
            <div className="hero-latest-btn">
                <div>Now</div>&nbsp;
                <img src={arrow_icon} alt="arrow icon" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="hero image" />
        </div>


    </div>
  )
}

export default Hero