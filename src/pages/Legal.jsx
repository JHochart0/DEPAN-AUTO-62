import React, { useEffect } from 'react';

import '../css/Legal.css'

import NavLink from "../components/NavLink.jsx";

// legal and privacy politics page
function Legal() {
    // change the title of the page
    useEffect(() => {
        document.title = "DEPAN AUTO 62 - Mentions légales et politique de confidentialité";
    }, []);

    return (
        
        <div className="legal-container">
            <h1>Mentions légales et politique de confidentialité</h1>

            {/* Legals part */}
            <div className="legal-section">
                <h2>Mentions légales</h2>
                <div className="legal-section-text">
                    <p><strong>Nom commercial : </strong>DEPAN AUTO 62</p>
                    <p><strong>Forme Juridique : </strong>Entrepreneur individuel</p>
                    <p><strong>Micro-entreprise : </strong>Oui</p>
                    <p><strong>Forme d'exercice : </strong>Artisanale réglementée</p>
                    <p><strong>Dirigeant : </strong>Verstraet ALEXIS</p>
                    <p><strong>SIREN : </strong>944 930 627</p>
                    <p><strong>SIRET (siège) : </strong>944 930 627 00012</p>
                    <p><strong>Date d'immatriculation au RNE : </strong>17/06/2025</p>
                    <p><strong>Date de début d'activité : </strong>27/05/2025</p>
                    <p><strong>Activité principale : </strong>Entretien et réparation de véhicules automobiles légers au domicile des particuliers</p>
                    <p><strong>Code APE : </strong>4520A - Entretien et réparation de véhicules automobiles légers</p>
                    <p><strong>Code APRM : </strong>45.20A-A - Réparation automobile de véhicules automobiles légers : entretien courant</p>
                    <p><strong>Adresse : </strong>201 rue Garibaldi, 62100 Calais, FRANCE</p>
                    <p><strong>Adresse électronique : </strong>depan-auto-62@outlook.fr</p>
                    <p><strong>Numéro de téléphone : </strong>07 49 70 57 35</p> 
                </div>
            </div>

            {/* Privacy politics part */}
            <div className="privacy-section">
                <h2>Politique de confidentialité</h2>
                <div className="privacy-section-text">
                    <p>
                        Chez <strong>DEPAN AUTO 62</strong>, la protection de vos données personnelles est une priorité.
                    </p>

                    <h3>1. Données collectées</h3>
                    <ul>
                        <li>Nom et prénom</li>
                        <li>Numéro de téléphone</li>
                        <li>Adresse e-mail</li>
                        <li>Adresse d’intervention (domicile ou travail)</li>
                        <li>Informations sur le véhicule</li>
                    </ul>

                    <h3>2. Finalités</h3>
                    <p>
                        Les informations transmises via le formulaire de contact sont utilisées uniquement 
                        pour organiser un rendez-vous, répondre à votre demande et vous recontacter.
                    </p>

                    <h3>3. Transmission & sécurité</h3>
                    <p>
                        Le formulaire est géré par <a href="https://formsubmit.co/">Formsubmit.co</a>, qui envoie vos données par e-mail. 
                        Ce service utilise <a href="https://developers.google.com/recaptcha?hl=fr">Google reCAPTCHA</a> afin de protéger le site contre les spams et abus.
                        La <a href="https://policies.google.com/privacy">politique de confidentialité</a> ainsi que les <a href="https://policies.google.com/terms">conditions de service</a> de Google s'appliquent donc aussi.
                    </p>

                    <h3>4. Conservation</h3>
                    <p>
                        Les données ne sont pas stockées sur ce site : elles sont uniquement transmises 
                        par e-mail et conservées le temps nécessaire au traitement de votre demande.
                    </p>

                    <h3>5. Partage</h3>
                    <p>
                        Vos données ne sont jamais revendues, ni utilisées à des fins publicitaires. 
                        Elles peuvent être communiquées uniquement si la loi l’exige.
                    </p>

                    <h3>6. Vos droits</h3>
                    <p>
                        Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, 
                        de limitation et d’opposition. Pour exercer vos droits, merci de nous contacter via la page <NavLink to="/contact" content="Contact" id=""/>.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Legal;
