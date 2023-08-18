import React from "react";
import Hero from "./Hero";
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

            <section className="row home-section-styles menu-page">

            </section>
        </main>
    );
}


export default ReservationsPage;