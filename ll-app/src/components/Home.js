import React from "react";
import Hero from "./Hero";
import SpecialsSection from "./SpecialsSection";
import Testimonials from "./TestimonialsSection";
import AboutSection from "./AboutSection";
import restaurantfood from "../images/restaurantfood.jpg";


function Home() {
    return (
        <main>
            <Hero
                pageTitle="Little Lemon" 
                subhead="Chicago" 
                description="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
                imgsrc={restaurantfood}
                btnText="Reserve a Table"
            /> 
            <SpecialsSection />
            <Testimonials />
            <AboutSection />
        </main>
    );
}


export default Home;