import React from "react";
import Header from "./Header";
import Home from "./Home";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import ReservationsPage from "./ReservationsPage";
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
            </Routes>
            <Footer />
        </main>
    );
}


export default Main;