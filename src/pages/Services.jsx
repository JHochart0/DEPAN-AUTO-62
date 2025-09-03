import React, { useEffect } from 'react';

import '../css/Services.css';

import useRevealOnScroll from "../hooks/useRevealOnScroll";

import ServiceCard from "../components/ServiceCard.jsx";

function Services() {

    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right");

    // change the title of the page
    useEffect(() => {
        document.title = "DEPAN AUTO 62 - Prestations";
    }, []);

    return (
        <div className="services-container">
            {/* Banner */}
            <div className="services-banner">
                <img src="/photos_depan_auto_62/depan_auto_62_prestations.jpg" alt="Prestations DEPAN AUTO 62" className="services-banner-img"/>
                <div className="services-banner-title fade-in-up">
                    <h1>Découvrez nos prestations proposées !</h1>
                </div>
                
            </div>
            <ServiceCard
                    title="Entretien"
                    description="Gardez votre voiture en bon état."
                    details={[
                    "Vidange et filtres",
                    "Contrôle des freins",
                    "Changement des bougies",
                    ]}
                />
        </div>
    );
}

export default Services;
