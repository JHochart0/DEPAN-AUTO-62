import React from 'react';

import NavLink from "./NavLink.jsx";
import Logo from './Logo';
import PhoneButton from './PhoneButton';
import Schedules from './Schedules.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-top">
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
                <div className="footer-informations">
                    <Logo />
                    <PhoneButton />
                    <a className="footer-facebook-button" href="https://www.facebook.com/profile.php?id=61577391726886" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} className="footer-facebook-logo" />
                    </a>
                </div>
                <Schedules className="footer"/>
                
            </div>
            <div className="footer-bottom">
                <p className="footer-copyright">© Tous droits réservés | DEPAN AUTO 62</p>
                <NavLink to="/legal" content="Mentions légales et politiques de confidentialité" id="footer-legalLink" />
            </div>
        </footer>
    );
}

export default Footer;
