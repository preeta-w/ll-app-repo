import React from "react";
import Header from "./Header";
import Home from "./Home";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import ReservationsPage from "./ReservationsPage";
import ConfirmedBooking from "./ConfirmedBooking";
import Footer from "./Footer";
import { Routes, Route } from 'react-router-dom';



function Main() {
    return (
        <main>
            <Header />            
            <Routes>
                <Route path="/" element={<Home />} />            
                <Route path="/about" element={<AboutPage />} />            
                <Route path="/menu" element={<MenuPage />} />            
                <Route path="/reservations" element={<ReservationsPage />} />
                <Route path="/confirmedbooking" element={<ConfirmedBooking />} />
            </Routes>
            <Footer />
        </main>
    );
}


export default Main;