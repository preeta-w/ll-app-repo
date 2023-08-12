import React from "react";
import HeroSection from "./HeroSection";
import SpecialsSection from "./SpecialsSection";
import Testimonials from "./TestimonialsSection";
import About from "./AboutSection";
import FlexDemo from "./FlexDemo";

function Main() {
    return (
        <main>
            {<HeroSection />}
            {<SpecialsSection />}
            {<Testimonials />} 
            {<About />}
            {/*<FlexDemo />*/}
        </main>
    );
}


export default Main;