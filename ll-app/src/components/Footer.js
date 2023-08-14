import React from "react";
import footerlogo from "../images/footerLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Footer() {
    return (
        <footer className="row home-section-styles">
            
            <section className="column col-2">
                <img src={footerlogo} />
            </section>
            
            <section className="column col-2">
                <p><b>Popular links</b></p>
                <nav>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
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
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">TikTok</a></li>
                    </ul>
                </nav>
            </section>

        </footer>
    );
}


export default Footer;