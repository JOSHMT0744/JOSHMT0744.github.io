import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import piano from "../../assets/slider/piano.webp";
import devpost from "../../assets/slider/devpost.webp";
import reading from "../../assets/slider/reading.jpg";

function CenterMode() {
   const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      dots: true,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               arrows: false,
               centerMode: true,
               centerPadding: "40px",
               slidesToShow: 1
            }
         },
         {
            breakpoint: 480,
            settings: {
               arrows: false,
               centerMode: true,
               centerPadding: "40px",
               slidesToShow: 1
            }
         }
      ]
   };

   return (
      <div className="container" id="projects">
         <h1 className="slider-title">Projects and Interests</h1>
         <Slider {...settings}>
         <div className="card">
            <img src={piano} alt="Piano" className="w-50"/>
            <div className="card-body">
               <h3>Grade 8 Classical Piano</h3>
               <p>Trinity College London - Merit</p>
            </div>
         </div>
         <div className="card">
            <img src={devpost} alt="devpost" className="w-50"/>
            <div className="card-body">
               <h3>Devpost Projects</h3>
               <p>Hackathon projects I have participated in - <a href="https://devpost.com/JOSHMT0744">Click here to view</a></p>
            </div>
         </div>
         <div className="card">
            <img src={reading} alt="reading a book" className="w-100"/>
            <div className="card-body">
               <h3>My library 📚</h3>
               <p>Check out what I&#39;ve been reading - <a href="https://josh-thompson.notion.site/Book-Notes-76f9e844ac7f460d8ece2b791dcc46a6">Here</a></p>
            </div>
         </div>
         </Slider>
      </div>
   );
   }

export default CenterMode;