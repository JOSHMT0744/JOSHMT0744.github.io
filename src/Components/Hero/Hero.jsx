import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import "./Hero.css"
import cv from "../../assets/Joshua_Thompson_CV.pdf"
import spain_photo from "../../assets/profile_photo.webp"
import me_intro from "../../assets/me_intro.png"

const Hero = () => {
   return (
      <div id="home" className="hero">
         <div className="hover-fade-container">
            <img src={spain_photo} alt="personal profile image" className="fade-img base" />
            <img src={me_intro} alt="second personal profile image" className="fade-img overlay" />
         </div>
         <h1><span>Hi, I'm Josh!</span></h1>
         <p>This personal portfolio website is my attempt to display all of my hobbies, interests and projects!</p>

         <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
            <div className="hero-resume"><a href={cv} download={cv}>My CV</a></div>
         </div>
      </div>
   )
}

export default Hero