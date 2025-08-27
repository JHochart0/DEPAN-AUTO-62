import React, { useEffect } from 'react';

import NavLink from "../components/NavLink.jsx";

import '../css/Home.css';

import useRevealOnScroll from "../hooks/useRevealOnScroll";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFileInvoice, faTools, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Home() {
    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right");

    // change the title of the page
    useEffect(() => {
        document.title = "DEPAN AUTO 62 - Accueil";
    }, []);

    return (
        <div className="home-container">
            
            {/* Banner */}
            <div className="home-banner fade-in-up"></div>

            {/* Contact section */}
            <div className="home-contact-section fade-in-up">
                    <h1>Besoin d'un dépannage ?</h1>
                    <h2>Entretien, réparation et dépannage rapide dans le Pas-de-Calais.</h2>
                    <NavLink to="/contact" content="Contactez-nous !" id="home-contact-section-btn"></NavLink>
            </div>

            {/* Introduction */}
            <div className="home-intro">
                <div className="home-intro-left-side fade-in-side-left"></div>
                <div className="home-intro-right-side fade-in-side-right">
                    <h2 className="home-intro-right-side-h2">Votre dépanneur automobile dans le Pas-de-Calais</h2>
                    <p className="home-intro-right-side-p">
                        Besoin d'un entretien pour votre véhicule ? DEPAN AUTO 62 est là pour vous dans le Pas-de-Calais !
                    </p>
                    <p className="home-intro-right-side-p">
                        Votre voiture réparée <strong>sans stress, sans garage, sans attente</strong>. 
                    </p>
                    <p className="home-intro-right-side-p">
                        Dépannage et entretien à domicile par un mécanicien diplômé !
                    </p>
                </div>
            </div>
            {/* Geographic zone */}
            <div className="home-zone">
                <div className="home-zone-left fade-in-side-left">
                    <h2 className="home-zone-h2">Notre zone d’intervention</h2>
                    <p className="home-zone-p">
                        DEPAN AUTO 62 intervient dans un rayon de <strong>40 km autour de Calais</strong>.
                    </p>
                    <p className="home-zone-p">
                        Pour tout problème avec votre véhicule, nous assurons un dépannage rapide <strong>à votre domicile</strong> ou vous accueillons <strong>sur rendez-vous dans notre garage</strong>.
                    </p>
                </div>
                <div className="home-zone-right fade-in-side-right"></div>
            </div>

            {/* Benefits section */}
            <div className="home-benefits fade-in-up">
                <h1>Nos atouts</h1>
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
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
                    <p>Déplacement jusqu'à 40 km autour de Calais</p>
                </div>
            </div>

            {/* Prestations */}
            <section className="home-services fade-in-up">
                <NavLink to="/services" content="Nos prestations" id="service-card"></NavLink>
            </section>
        </div>
    );
}

export default Home;
