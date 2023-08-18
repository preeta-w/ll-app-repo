import React from "react";
import aboutImage from "../images/about-images.png";

function AboutSection() {
    return (
        <section className="about-section row home-section-styles">

            <section className="column col-4">
                <h2 id="about" className="spacer-24">About Little Lemon</h2>
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
                <img src={aboutImage} className="hero-img" alt="Founders of Little Lemon"/>
            </section>

        </section>
    );
}


export default AboutSection;