import React from "react";
import restaurantfood from "../images/restaurantfood.jpg";

function Hero() {
    return (
        <section className="hero-section row home-section-styles">

            <section className="column col-4">
                <h1 id="hero">Little Lemon</h1>
                <h2 className="spacer-24"style={{color:"white"}}>Chicago</h2>
                <p class="lead-text spacer-24" style={{color:"white"}}>
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button className="button">Reserve a Table</button>
            </section>

            <section className="column col-4">
                <img src={restaurantfood} className="hero-img"/>
            </section>
            
        </section>
    );
}


export default Hero;