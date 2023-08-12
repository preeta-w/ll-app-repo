import React from "react";
import footerlogo from "../images/footerLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Footer() {
    return (
        <footer className="row home-section-styles">
            <section className="column col-2"></section>
            
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
                <nav>
                    <ul>
                        <li><FontAwesomeIcon icon={faBuilding} /><br />
                        123 Chicago Street <br />
                        Chicago, IL 12345</li>
                        <li><FontAwesomeIcon icon={faPhone} /><br /> 
                        123-456-7890</li>
                        <li><FontAwesomeIcon icon={faEnvelope} /> <br />
                        littlelemon@gmail.com</li>
                    </ul>
                </nav>
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

            <section className="column col-2"></section>
        </footer>
    );
}


export default Footer;