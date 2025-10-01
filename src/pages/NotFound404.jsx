import React, { useEffect } from 'react';

import NavLink from "../components/NavLink.jsx";

import '../css/NotFound404.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Error 404 page
function NotFound404() {
    
    // change the title of the page
    useEffect(() => {
        document.title = "DEPAN AUTO 62 - Page non trouvée";
    }, []);

    return (
        <div className="notFound404-container">
            <h1 className="notFound404-h1">Erreur 404</h1>
            <h2 className="notFound404-h2">La page que vous essayez de chercher n'existe pas.</h2>
            <NavLink to="/" content="Retour à l'accueil" id="notFound404-btn">
                <FontAwesomeIcon className="notFound404-btn-icon" icon={faArrowLeft} />
            </NavLink>
        </div>
    );
}

export default NotFound404;
