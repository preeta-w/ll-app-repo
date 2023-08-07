import React from "react";
import footerlogo from "../images/footerLogo.png";

function Footer() {
    return (
        <footer>
            <h1>Footer component</h1>
            
            <section>
                <img src={footerlogo} />
            </section>
            
            <section>
                <p><b>Doormat nav</b></p>
                <nav>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Reservations</a></li>
                        <li><a>Order Online</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </nav>
            </section>
            
            <section>
                <p><b>Contact</b></p>
                <nav>
                    <ul>
                        <li>Address</li>
                        <li>Phone number</li>
                        <li>Email</li>
                    </ul>
                </nav>
            </section>

            <section>
                <p><b>Social Media</b></p>
                <nav>
                    <ul>
                        <li><a>Facebook</a></li>
                        <li><a>Instagram</a></li>
                        <li><a>TikTok</a></li>
                    </ul>
                </nav>
            </section>
        </footer>
    );
}


export default Footer;