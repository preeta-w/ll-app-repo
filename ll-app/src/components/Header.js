import React from "react";
import headerlogo from "../images/Logo.svg";

function Header() {
    return (
        <header className="row">
            <div className="column col-2"></div>

            <div className="column col-2">
               <img src={headerlogo} />
            </div>

            <div className="column col-6">
                <nav>
                    <ul>
                        <li><a href="#hero" className="nav-links">Home</a></li>
                        <li><a href="#about" className="nav-links">About</a></li>
                        <li><a href="#" className="nav-links">Menu</a></li>
                        <li><a href="#" className="nav-links">Reservations</a></li>
                        <li><a href="#" className="nav-links">Order Online</a></li>
                        <li><a href="#" className="nav-links">Login</a></li>
                    </ul>
                </nav>
            </div>

            <div className="column col-2"></div>
        </header>
    );
}


export default Header;