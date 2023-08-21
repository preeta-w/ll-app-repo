import React from "react";
import Hero from "./Hero";
import BookingForm from "./BookingForm";
import bruschetta from "../images/bruschetta.png"

function ReservationsPage() {
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

                <BookingForm />
            
            </section>
        </main>
    );
}


export default ReservationsPage;