import React, { useEffect } from 'react';

import NavLink from "../components/NavLink.jsx";

import '../css/Home.css';

import useRevealOnScroll from "../hooks/useRevealOnScroll";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFileInvoice, faTools, faMapMarkerAlt, faBolt, faCar } from '@fortawesome/free-solid-svg-icons';

// home page
function Home() {
    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right");

    // change the title of the page
    useEffect(() => {
        document.title = "DEPAN AUTO 62 - Accueil";
    }, []);

    return (
        <div className="home-container">
            
            {/* Banner */}
            <div className="home-banner">
                <img  src={`${import.meta.env.BASE_URL}/photos_depan_auto_62/depan_auto_62_banniere.jpg`} alt="Bannière Dépan Auto 62" className="fade-in-up"/>
            </div>

            {/* Contact section */}
            <div className="home-contact-section fade-in-up">
                    <h1>Besoin d'un dépannage ?</h1>
                    <h2>Entretien, réparation et dépannage rapide dans le Pas-de-Calais.</h2>
                    <NavLink to="/contact" content="Contactez-nous !" id="home-contact-section-btn"></NavLink>
            </div>

            {/* Introduction part */}
            <div className="home-intro">
                <div className="home-intro-left-side fade-in-side-left">
                    <img src={`${import.meta.env.BASE_URL}/photos_depan_auto_62/depan_auto_62_accueil1.jpg`} alt="accueil vitrine" />
                </div>
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
            {/* Geographic zone part */}
            <div className="home-zone">
                <div className="home-zone-left fade-in-side-left">
                    <h2 className="home-zone-h2">Notre zone d’intervention</h2>
                    <p className="home-zone-p">
                        DEPAN AUTO 62 intervient dans un rayon de <strong>40 km autour de Calais</strong>.
                    </p>
                    <p className="home-zone-p">
                        Pour tout problème avec votre véhicule, nous assurons un dépannage rapide <strong>à votre domicile</strong> ou directement <strong>sur votre lieu de travail</strong>.
                    </p>
                </div>
                <div className="home-zone-right fade-in-side-right">
                    <img src={`${import.meta.env.BASE_URL}/photos_depan_auto_62/depan_auto_62_zone_de_chalandise.jpg`} alt="Zone de chalandise" />
                </div>
            </div>


            {/* Services & Benefits section */}
            <div className="home-services-section fade-in-up">
                <h2 className="home-services-title">Nos avantages et prestations</h2>
                <div className="home-services-cards">
                    <div className="service-card">
                        <FontAwesomeIcon icon={faClock} size="2x" />
                        <h3>Disponibilité</h3>
                        <p>Nous sommes disponibles 6 jours sur 7 pour répondre à vos besoins rapidement.</p>
                    </div>
                    <div className="service-card">
                        <FontAwesomeIcon icon={faTools} size="2x" />
                        <h3>Entretien & Réparation</h3>
                        <p>Révisions, contrôles et réparations pour tous types de véhicules.</p>
                    </div>
                    <div className="service-card">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
                        <h3>Zone d’intervention</h3>
                        <p>Déplacement à domicile dans un rayon de 40 km autour de Calais.</p>
                    </div>
                    <div className="service-card">
                        <FontAwesomeIcon icon={faFileInvoice} size="2x" />
                        <h3>Devis & Dépannage rapide</h3>
                        <p>Obtenez un devis clair et bénéficiez d’une intervention rapide.</p>
                    </div>
                </div>
                <NavLink to="/services" content="Voir toutes les prestations" id="home-services-button"/>
            </div>
        </div>
    );
}

export default Home;
