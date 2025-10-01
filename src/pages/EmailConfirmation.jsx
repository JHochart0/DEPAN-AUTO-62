import React, { useEffect } from 'react';

import NavLink from "../components/NavLink.jsx";

import '../css/EmailConfirmation.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// email confirmation page
function EmailConfirmation() {
    
    // change the title of the page
    useEffect(() => {
        document.title = "DEPAN AUTO 62 - Mail de contact bien envoyé !";
    }, []);

    return (
        <div className="emailConfirmation-container">
            <h1 className="emailConfirmation-h1">
                Prise de rendez-vous envoyée !
            </h1>
            <h2 className="emailConfirmation-h2">
                Merci pour votre prise de contact.
            </h2>
            <h2 className="emailConfirmation-h2">
                Nous faisons tout notre possible pour vous recontacter le plus rapidement !
            </h2>
            <NavLink to="/" content="Retour à l'accueil" id="emailConfirmation-btn">
                <FontAwesomeIcon className="emailConfirmation-btn-icon" icon={faArrowLeft} />
            </NavLink>
        </div>
    );
}

export default EmailConfirmation;
