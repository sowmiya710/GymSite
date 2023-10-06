import React from 'react'
import "./Features.css"
import BodyBuilding from "../images/bodybuilding.jpg"
import Men from "../images/mens.jpg"
import Women from "../images/women.jpg"
const Features = () => {
  return (
    <div>
        <section className="features" id="features">
        <h1 class="heading"> <span>Gym features</span> </h1>

    <div class="box-container">

        <div class="box">
            <img src={BodyBuilding} alt=""/>
            <div class="content">
                <h3>Gym for Men</h3>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-pinterest"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
        </div>

        <div class="box">
            <img src={Women} alt=""/>
            <div class="content">
                <h3>Gym for Women</h3>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-pinterest"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
        </div>

    </div>

</section>
    </div>
  )
}

export default Features