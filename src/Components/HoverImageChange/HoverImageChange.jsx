import React, { useState } from 'react'
import spain_photo from "../../assets/profile_photo.webp"
import me_intro from "../../assets/me_intro.png"

const HoverImageChange = () => {
  // Define the images you want to use
  const images = [
    spain_photo,
    me_intro
  ];

  // State to track the current image index
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [nextImage, setNextImage] = useState(images[1])
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  // Handle mouse hover events to change the image
  const handleMouseEnter = () => {
   setIsHovered(true);
    // Change the image when mouse enters
    //const randomIndex = Math.floor(Math.random() * images.length);
    setNextImage(images[1]);
  };

  const handleMouseLeave = () => {
   setIsHovered(false);
    // Reset the image to the first one when mouse leaves
    setCurrentImage(images[0]);
  };

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "14 / 3",
        border: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        top: "1em"
      }}
    >
      <img
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
        src={currentImage}
        alt="Image of me"
        style={{ width: '100%', 
         height: '100%', 
         objectFit: 'cover', 
         opacity: isHovered ? 0 : 1, // Fade out when hovered
         transition: 'opacity 0.5s ease, transform 0.5s ease', // Smooth transition
         transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Optional: slight zoom effect 
         zIndex: 1,
         position: 'absolute'
          }}
      />

      <img
        src={nextImage}
        alt="Image of me"
        style={{ width: '100%', 
         height: '100%', 
         objectFit: 'cover', 
         opacity: isHovered ? 1 : 0, // Fade out when hovered
         transition: 'opacity 0.5s ease, transform 0.5s ease', // Smooth transition
         transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Optional: slight zoom effect 
         zIndex: -1,
         position: 'absolute'
          }}
      />
    </div>
  )
}

export default HoverImageChange