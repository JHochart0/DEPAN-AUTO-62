import React from 'react';

import NavLink from "./NavLink.jsx";
import Logo from './Logo';
import PhoneButton from './PhoneButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <div className="footer-reviews">
                    IL FAUT FAIRE LES REVIEWS ICI
                </div>
                <div className="footer-informations">
                    <Logo />
                    <PhoneButton />
                    <a className="footer-facebook-button" href="https://www.facebook.com/profile.php?id=61577391726886" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} className="footer-facebook-logo" />
                    </a>
                </div>
                <div className="footer-schedules">
                    <h1 className="footer-schedules-h1">Nos horaires</h1>
                    <div className="footer-schedules-hours">
                        <h2 className="footer-schedules-h2">Lun - Sam</h2>
                        <h3 className="footer-schedules-h3">8h30 - 19h00</h3>
                        <h2 className="footer-schedules-h2">Dimanche</h2>
                        <h3 className="footer-schedules-h3">Fermé</h3>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-copyright">© Tous droits réservés | DEPAN AUTO 62</p>
                <NavLink to="/legal" content="Mentions légales et politiques de confidentialité" id="footer-legalLink" />
            </div>
        </footer>
    );
}

export default Footer;
