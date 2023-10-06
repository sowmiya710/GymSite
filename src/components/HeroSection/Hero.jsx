import React from 'react'
import "./Hero.css"
import HeroImg from '../images/hero.jpg'
const Hero = () => {
  return (
    <div>
        <section className="hero" id="home">

<div className="hero__image">
    <img src={HeroImg} alt="Lifting heavy!"/>
</div>

<div className="container hero__container">

    <div className="hero-wrapper">
        <h1 className="hero-wrapper__heading">Make this year <span>your year</span></h1>
        <p className="hero-wrapper__body">
            You don't have to be great to start, but you have to start to be great!
        </p>
        <a href="#" className="btn">Find out
            More</a>
    </div>

</div>

</section>
    </div>
  )
}

export default Hero;