import React from "react";
import footerlogo from "../images/footerLogo.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Footer() {
    return (
        <footer className="row home-section-styles">
            
            <section className="column col-2">
                <img src={footerlogo} alt="Little Lemon Logo" />
            </section>
            
            <section className="column col-2">
                <p><b>Popular links</b></p>
                <nav>
                    <ul>
                        <Link to="/" className="nav-links"><li>Home</li></Link>
                        <Link to="/about" className="nav-links"><li>About</li></Link>
                        <Link to="/menu" className="nav-links"><li>Menu</li></Link>
                        <Link to="/reservations" className="nav-links"><li>Reservations</li></Link>
                        <Link to="/login" className="nav-links"><li>Login</li></Link>
                    </ul>
                </nav>
            </section>
            
            <section className="column col-2">
                <p><b>Contact</b></p>
                <div className="row footer-contact">
                    <p><FontAwesomeIcon icon={faBuilding} /></p>
                    <p>123 Chicago Street <br />
                        Chicago, IL 12345</p>
                </div>
                <div className="row footer-contact">
                    <p><FontAwesomeIcon icon={faPhone} /></p>
                    <p>123-456-7890</p>
                </div>
                <div className="row footer-contact">
                    <p><FontAwesomeIcon icon={faEnvelope} /></p>
                    <p>litlem@gmail.com</p>
                </div>
            </section>

            <section className="column col-2">
                <p><b>Social Media</b></p>
                <nav>
                    <ul>
                        <Link to="https://www.facebook.com/"><li>Facebook</li></Link>
                        <Link to="https://www.instagram.com/"><li>Instagram</li></Link>
                        <Link to="https://www.tiktok.com/en/"><li>TikTok</li></Link>
                    </ul>
                </nav>
            </section>

        </footer>
    );
}


export default Footer;