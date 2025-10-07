import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import '../css/Contact.css';

import useRevealOnScroll from "../hooks/useRevealOnScroll";

import Schedules from '../components/Schedules';
import NavLink from "../components/NavLink.jsx";

// contact page
function Contact() {
    const [isFbLoaded, setIsFbLoaded] = useState(false);

    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right");

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

    // function to check the format of the phone number in the form and handle the submit button.
    const handleSubmit = (e) => {
        e.preventDefault();

        // checking the format of the phone number
        const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
        const digitsCount = phone.replace(/\D/g, "").length;

        if (!phoneRegex.test(phone) || digitsCount < 6 || digitsCount > 15) {
            setError(
                "Veuillez saisir un numéro de téléphone valide.\n(Exemple : +33 6 12 34 56 78 ou 0612345678)"
            );
            return;
        }
        // if ok, we submit the form
        setError(""); // no error
        e.target.submit();
    };

    return (
        <div className="contact-container">
            {/* Banner */}
            <div className="contact-banner">
                <img src={`${import.meta.env.BASE_URL}/photos_depan_auto_62/depan_auto_62_voiture_floquee.jpg`} alt="Voiture DEPAN AUTO 62" className="contact-banner-img"/>
                <div className="contact-banner-title fade-in-up">
                    <h1>Besoin d'un dépannage ou d'un renseignement ?</h1>
                    <h1>Contactez-nous dès maintenant !</h1>
                </div>
            </div>
            {/* First part of the contact page (with informations and form) */}
            <div className="contact-first-part">
                {/* Informations */}
                <div className="contact-informations-container fade-in-side-left">
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
                {/* Contact Form */}
                <div className="contact-form-container fade-in-side-right">
                    <h1 className="contact-form-title">Prendre rendez-vous</h1>
                    <form
                        onSubmit={handleSubmit}
                        action="https://formsubmit.co/ce5f3d1e4bc9a23382b07adf7b3b23ed"
                        method="POST"
                        className="contact-form"
                    >
                        <input type="text" name="Nom" placeholder="Nom*" required />
                        <input type="text" name="Prenom" placeholder="Prénom*" required />
                        <input type="text" name="Adresse d'intervention" placeholder="Adresse d'intervention*" required />
                        
                        <input
                            type="tel"
                            name="Numéro de téléphone" 
                            placeholder="Numéro de téléphone*" 
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                            required 
                        />
                        

                        <input type="text" name="Plaque d'immatriculation" placeholder="Plaque d'immatriculation*" required></input>
                        
                        <select name="Prestation souhaitée" required>
                            <option value="" disabled selected hidden>Prestation souhaitée*</option>
                            <option value="Système de freinage">Système de freinage</option>
                            <option value="Système de direction">Système de direction</option>
                            <option value="Système échappement">Système échappement</option>
                            <option value="Système moteur">Système moteur</option>
                            <option value="Système électronique">Système électronique</option>
                        </select>

                        <textarea name="Details de la prestation" placeholder="Précisez les détails de la prestation souhaitée...*" rows="4" required></textarea>
                        
                        {error && <p className="contact-form-error-message">{error}</p>}
                        <button type="submit" className="contact-submit">Envoyer</button>

                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="Prise de rendez-vous depuis le site DEPAN AUTO 62"></input>
                        <input type="hidden" name="_next" value={`${window.location.origin}/DEPANAUTO62/#/email-sent`} />
                    </form>
                </div>
            </div>
            {/* Second part of the contact page (facebook page)*/}
            <div className="contact-second-part fade-in-up">
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
