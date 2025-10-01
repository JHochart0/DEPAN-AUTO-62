import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import PhoneButton from './PhoneButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import '../css/Header.css';

//this component is the header of each page
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Block the scroll when the mobile/tablet menu is opened
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    return (
        <header className="header-container">
            {/* Logo */}
            <Logo />

            {/* Desktop navbar */}
            <Navbar className="header-navbar desktop-only"/>

            {/* Desktop PhoneButton */}
            <PhoneButton className="phone-btn desktop-only" />

            {/* Burger button (tablets + mobiles) */}
            <button 
                className="burger-btn mobile-tablet-only" 
                onClick={toggleMenu} 
                aria-label="Ouvrir le menu"
            >
                <FontAwesomeIcon icon={faBars} />
            </button>

            {/* Mobile/Tablet menu */}
            {isMenuOpen && <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>}

            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleMenu} aria-label="Fermer le menu">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <Navbar onLinkClick={() => setIsMenuOpen(false)}/>
                <PhoneButton className="phone-btn"/>
            </div>
        </header>
    );
}

export default Header;