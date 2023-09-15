import React from "react";
import Hero from "./Hero";
import bruschetta from "../images/bruschetta.png"


function ConfirmedBooking() {
return (
    <main>
         <Hero 
                pageTitle="Reservations" 
                subhead="Save your spot!" 
                description="" 
                imgsrc={bruschetta}
                btnText=""
            />

        <section className="home-section-styles reservations-page">
            
            <section className="form-styles">
            <h2 style={{textAlign:"center"}}>Your booking is confirmed.</h2>
            </section>
        </section>


    </main>
);
}

export default ConfirmedBooking;