import React from "react";
import Hero from "./Hero";
import abouthero from "../images/about-hero.jpg"
import aboutImage from "../images/about-images.png";


function AboutPage() {
    return (
        <main>
            <Hero 
                pageTitle="About Little Lemon" 
                subhead="From humble beginnings"
                description="" 
                imgsrc={abouthero}
                btnText=""
            />

            <section className="about-section row home-section-styles">

            <section className="column col-4">
                <p>
                Little Lemon was founded on family recipes & tradition. 
                We believe that quality & authenticity come first. 
                We use the freshest ingredients & source authentic spices for rich & bold flavors.
                </p>
                <p>We are known for creating classic & authentic dishes featuring staples of the Mediterranean diet. 
                    The combination of our fresh fruits & vegetables, quality meats & seafood, and authentic international ingredients 
                    create flavors that are distinctly delicious. Little Lemon has become a well known, wonderful place to enjoy a glass of 
                    wine over dinner with family & friends.
                </p>
            </section>

            <section className="column col-4">
                <img src={aboutImage} className="hero-img" alt="Little Lemon founders"/>
            </section>

            </section>
        </main>
    );
}


export default AboutPage;