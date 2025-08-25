import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import '../css/Contact.css'

import Schedules from '../components/Schedules';
import NavLink from "../components/NavLink.jsx";



function Contact() {
    const [isFbLoaded, setIsFbLoaded] = useState(false);

    // change the title of the page and load the facebook widget
    useEffect(() => {
        document.title = "DEPAN AUTO 62 - Contact";

        const checkFbInterval = setInterval(() => {
            if (window.FB) {
                window.FB.XFBML.parse();
                setIsFbLoaded(true);
                clearInterval(checkFbInterval);
            }
        }, 300);
    }, []);

    // function to check if the email typed in the form is corresponding to the good format
    const handleSubmit = (e) => {
        e.preventDefault();
        // if ok, we submit the form
        e.target.submit();
    };

    return (
        <div className="contact-container">
            {/* Banner */}
            <div className="contact-banner">
                <div className="contact-banner-title">
                    <h1>Besoin d'un dépannage ou d'un renseignement ?</h1>
                    <h1>Contactez-nous dès maintenant !</h1>
                </div>
            </div>
            {/* First part of the contact page (with informations and form) */}
            <div className="contact-first-part">
                {/* Informations */}
                <div className="contact-informations-container">
                    <h1 className="contact-informations-title">Informations</h1>
                    <p className="contact-informations-phone">
                        <FontAwesomeIcon className="contact-informations-phone-icon" icon={faPhone} />
                        Téléphone : <span>07 49 70 57 35</span>
                    </p>
                    <Schedules className="contact-informations" />
                    <a className="contact-informations-email-button" href="mailto:depan-auto-62@outlook.fr">
                        <FontAwesomeIcon icon={faEnvelope} className="social-icon" /> Envoyer un mail
                    </a>
                    <h4 className="contact-informations-required-fields">*Champs Obligatoires</h4>
                    <p className="contact-informations-personal-data">
                        Les données personnelles que vous nous communiquez sont utilisées par DEPAN AUTO 62 aux seules fins de répondre à votre prise de rendez-vous.
                    </p>
                    <NavLink to="/legal" content="En savoir plus sur la politique de confidentialité" id="contact-informations-legal-link"/>
                </div> 
                {/* Form */}
                <div className="contact-form-container">
                    <h1 className="contact-form-title">Prendre rendez-vous</h1>
                    <form
                        onSubmit={handleSubmit}
                        action="https://formsubmit.co/6fb952b90f78235eea697297767b28be"
                        method="POST"
                        className="contact-form"
                    >
                        <input type="text" name="Nom" placeholder="Nom*" required />
                        <input type="text" name="Prenom" placeholder="Prénom*" required />
                        <input type="text" name="Adresse d'intervention" placeholder="Adresse d'intervention*" required />
                        <input type="tel" name="Numéro de téléphone" placeholder="Numéro de téléphone*" required />
                        <input type="text" name="Plaque d'immatriculation" placeholder="Plaque d'immatriculation*" required></input>
                        <select name="Prestation souhaitée" required>
                            <option value="" disabled selected hidden>Prestation souhaitée*</option>
                            <option value="prestation1">Prestation 1</option>
                            <option value="prestation2">Prestation 2</option>
                            <option value="prestation3">Prestation 3</option>
                        </select>
                        <button type="submit" className="contact-submit">Envoyer</button>

                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="Prise de rendez-vous depuis le site DEPAN AUTO 62"></input>
                        <input type="hidden" name="_next" value="http://localhost:5173/#/email-sent" />
                    </form>
                </div>
            </div>
            {/* Second part of the contact page (facebook page)*/}
            <div className="contact-second-part">
                <h2 className="contact-fb-page-title">Notre page Facebook</h2>

                {!isFbLoaded && (
                <div className="fb-loader">
                    <div className="spinner"></div>
                </div>
                )}

                <div 
                    class="fb-page"
                    data-href="https://www.facebook.com/profile.php?id=61577391726886"
                    data-tabs="timeline" 
                    data-width="500"
                    data-height=""
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="false"
                >
                    <blockquote 
                        cite="https://www.facebook.com/profile.php?id=61577391726886" 
                        class="fb-xfbml-parse-ignore"
                    >
                        <a href="https://www.facebook.com/profile.php?id=61577391726886">
                        </a>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

export default Contact;
