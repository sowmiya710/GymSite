import React, { useState } from 'react';
import "./Gallery.css";
import image_1 from "../images/gallery_1.jpg"
import image_2 from "../images/gallery_2.jpg"
import image_3 from "../images/gallery_3.jpg"
import image_4 from "../images/gallery_4.jpg"
import image_5 from "../images/gallery_5.jpg"
import image_6 from "../images/gallery_6.jpg"
import image_7 from "../images/gallery_7.jpg"
const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7
  ]

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={carouselContainerStyle}>
      <img
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        style={imageStyle}
      />
      <div style={buttonContainer}>
      <button style={prevButtonStyle} onClick={prevImage}>
      <box-icon name='left-arrow' ></box-icon>
      </button>
      <button style={nextButtonStyle} onClick={nextImage}>
      <box-icon name='right-arrow' ></box-icon>
      </button>
      </div>
      
    </div>
  );
};

// Styles
const carouselContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const imageStyle = {
  width: '1200px',
  height: '700px',
  objectFit: 'cover',
  marginBottom: '20px',
};
const buttonContainer = {
    width: "400px",
    alignItems:"center",
    justifyContent: "around",
}
const prevButtonStyle = {
  backgroundColor: '#eee',
  padding: '10px 20px',
  marginRight: '10px',
  backgroundColor: "#FFFF00",
  borderRadius: "50%",
};

const nextButtonStyle = {
  backgroundColor: '#eee',
  padding: '10px 20px',
  backgroundColor: "#FFFF00",
  borderRadius: "50%",
};

export default ImageCarousel;
