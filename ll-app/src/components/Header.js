import React from "react";
import headerlogo from "../images/Logo.svg";
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="row" id="home">

            <div className="column col-2">
                <Link to="/"><img src={headerlogo} alt="Little Lemon Logo" /></Link>
            </div>

            <div className="column col-10">
                <nav>
                    <ul>
                        <Link to="/" className="nav-links"><li>Home</li></Link>
                        <Link to="/about" className="nav-links"><li>About</li></Link>
                        <Link to="/menu" className="nav-links"><li>Menu</li></Link>
                        <Link to="/reservations" className="nav-links"><li>Reservations</li></Link>
                        <Link to="/login" className="nav-links"><li>Login</li></Link>
                    </ul>
                </nav>
            </div>

        </header>
    );
}


export default Header;