import React, {useState} from 'react';

import Navbar from './Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/img/DEPANAUTO62_Logo.jpg';
import { NavLink } from 'react-router-dom';

function Header() {
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    
    //function to change the content of the phone number button when the user clicks on it
    const togglePhoneButton = () => {
        setShowPhoneNumber(prev => !prev);
    }

    return (
        <header className="header-container">
            <NavLink to="/" content="" className="header-logo">
                <img src={logo} alt="Logo DEPANAUTO62" className="header-logo-img"></img>
                <div className="header-logo-text">
                    <h1 className="header-logo-title"><span>-</span>DEPAN AUTO 62<span>-</span></h1>
                    <h4 className="header-logo-slogan">VOTRE MÉCANICIEN À DOMICILE</h4>
                </div>
            </NavLink>

            <Navbar className="header-navbar"/>
            <button onClick={togglePhoneButton} className="header-phone-btn">
                <FontAwesomeIcon className="phone-icon" icon={faPhone} />
                {showPhoneNumber ? ' 07 49 70 57 35' : ' Appelez-nous'}
            </button>
        </header>
    );
}

export default Header;
