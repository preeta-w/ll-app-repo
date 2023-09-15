import React from "react";
import headerlogo from "../images/Logo.svg";
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="row" id="home">

            <section className="column col-2">
                <Link to="/"><img src={headerlogo} alt="Little Lemon Logo" /></Link>
            </section>

            <section className="column col-10">
                <nav>
                    <ul>
                        <Link to="/" className="nav-links"><li>Home</li></Link>
                        <Link to="/about" className="nav-links"><li>About</li></Link>
                        <Link to="/menu" className="nav-links"><li>Menu</li></Link>
                        <Link to="/reservations" className="nav-links"><li>Reservations</li></Link>                    </ul>
                </nav>
            </section>

        </header>
    );
}


export default Header;