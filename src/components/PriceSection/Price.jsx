import React from 'react'
import "./Price.css"
const Price = () => {
  return (
    <div>
    <h1 class="heading"> <span>Pricing</span> </h1>
    <section className="pricing" id="pricing">
    <div className="plan basic">
        <h3>basic plan</h3>
        <div className="price"><span>₹</span>1500<span>/mo</span></div>
       <div className="list">
        <p> <i className="fas fa-check"></i> personal training </p>
        <p> <i className="fas fa-check"></i> cardio exercise </p>
        <p> <i className="fas fa-check"></i> weight lifting </p>
        <p> <i className="fas fa-check"></i> diet plans </p>
        <p> <i className="fas fa-check"></i> overall results </p>
       </div>
       <a href="#" className="btn">get started</a>
    </div>

    <div className="plan">
        <h3>premium plan</h3>
        <div className="price"><span>₹</span>3000<span>/mo</span></div>
       <div className="list">
        <p> <i className="fas fa-check"></i> personal training </p>
        <p> <i className="fas fa-check"></i> cardio exercise </p>
        <p> <i className="fas fa-check"></i> weight lifting </p>
        <p> <i className="fas fa-check"></i> diet plans </p>
        <p> <i className="fas fa-check"></i> overall results </p>
       </div>
       <a href="#" className="btn">get started</a>
    </div>
    <div className="plan basic">
        <h3>premium plan</h3>
        <div className="price"><span>₹</span>5000<span>/mo</span></div>
       <div className="list">
        <p> <i className="fas fa-check"></i> personal training </p>
        <p> <i className="fas fa-check"></i> cardio exercise </p>
        <p> <i className="fas fa-check"></i> weight lifting </p>
        <p> <i className="fas fa-check"></i> diet plans </p>
        <p> <i className="fas fa-check"></i> overall results </p>
       </div>
       <a href="#" className="btn">get started</a>
    </div>
</section></div>
  )
}

export default Price