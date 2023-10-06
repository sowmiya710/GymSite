import React,{useRef, useEffect} from 'react'
import "./Gallery.css"
import ImageCarousel from "./ImageCarousel"

const Gallery = () => 
{
  
  return (
    <div>
        <section className="gallery" id="gallery">

<h1 className="heading"> <span>Gallery</span> </h1>
<ImageCarousel></ImageCarousel>


</section>
    </div>
  )
}

export default Gallery