import React from 'react';


import NavLink from "./NavLink.jsx";
import Logo from './Logo';
import PhoneButton from './PhoneButton';
import Schedules from './Schedules.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import '../css/Footer.css';

//this component is the Footer of each page
function Footer() {
    return (
        <footer className="footer-container">
            {/* first part of the footer */}
            <div className="footer-top">
                {/* Reviews part */}
                <div className="footer-reviews">
                    <h2 className="footer-reviews-h2">Des clients satisfaits !</h2>
                    <div className="footer-reviews-stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <a 
                        className="footer-reviews-button" 
                        href="https://www.facebook.com/profile.php?id=61577391726886&sk=reviews" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Consulter les avis
                    </a>
                </div>
                {/* Informations part */}
                <div className="footer-informations">
                    <Logo />
                    <PhoneButton className="phone-btn"/>
                    <a className="footer-facebook-button" href="https://www.facebook.com/profile.php?id=61577391726886" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} className="footer-facebook-logo" />
                    </a>
                </div>

                {/* Schedule part */}
                <Schedules className="footer"/>
                
            </div>
            {/* Second part of the footer */}
            <div className="footer-bottom">
                <p className="footer-copyright">© {new Date().getFullYear()} Tous droits réservés | DEPAN AUTO 62</p>
                <NavLink to="/legal" content="Mentions légales et politique de confidentialité" id="footer-legalLink" />
            </div>
        </footer>
    );
}

export default Footer;
