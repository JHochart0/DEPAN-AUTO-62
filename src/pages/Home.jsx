import React, { useEffect } from 'react';

import NavLink from "../components/NavLink.jsx";

import '../css/Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFileInvoice, faTools, faBolt } from '@fortawesome/free-solid-svg-icons';

function Home() {
    // change the title of the page
    useEffect(() => {
        document.title = "DEPAN AUTO 62 - Accueil";
    }, []);

    return (
        <div className="home-container">

            <div className="home-banner"></div>

            <div className="home-contact-section">
                    <h1>Besoin d'un dépannage ?</h1>
                    <h2>Entretien, réparation et dépannage rapide dans le Pas-de-Calais.</h2>
                    <NavLink to="/contact" content="Contactez-nous !" id="home-contact-section-btn"></NavLink>
            </div>


            <div className="home-intro">
                <div className="home-intro-left-side">
                    
                </div>
                <div className="home-intro-right-side">
                    <h2 className="home-intro-right-side-h2">Votre dépanneur automobile dans le Pas-de-Calais</h2>
                    <p className="home-intro-right-side-p">
                        Besoin d'un entretien pour votre véhicule ? DEPAN AUTO 62 est là pour vous dans tout le Pas-de-Calais !
                    </p>
                    <p className="home-intro-right-side-p">
                        
                        Votre voiture réparée sans stress, sans garage, sans attente. 
                    </p>
                    <p className="home-intro-right-side-p">
                        Dépannage et entretien à domicile par un mécanicien diplômé !
                    </p>
                </div>
                
            </div>

            {/* Atouts */}
            <section className="home-benefits">
                <div className="benefit-card">
                    <FontAwesomeIcon icon={faClock} size="2x" />
                    <p>Disponibilité 6j/7</p>
                </div>
                <div className="benefit-card">
                    <FontAwesomeIcon icon={faFileInvoice} size="2x" />
                    <p>Devis rapide</p>
                </div>
                <div className="benefit-card">
                    <FontAwesomeIcon icon={faTools} size="2x" />
                    <p>Expérience & savoir-faire</p>
                </div>
                <div className="benefit-card">
                    <FontAwesomeIcon icon={faBolt} size="2x" />
                    <p>Dépannage express</p>
                </div>
            </section>

            {/* Prestations */}
            <section className="home-services">
                <NavLink to="/services" content="Nos prestations" id="service-card"></NavLink>
            </section>
        </div>
    );
}

export default Home;
