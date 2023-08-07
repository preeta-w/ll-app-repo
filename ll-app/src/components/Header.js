import React from "react";
import headerlogo from "../images/Logo.svg";

function Header() {
    return (
        <header>
            <h1>Header component</h1>
            <nav>
                <ul>
                    <li><img src={headerlogo} /></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservations</a></li>
                    <li><a>Order Online</a></li>
                    <li><a>Login</a></li>
                </ul>
            </nav>
        </header>
    );
}


export default Header;