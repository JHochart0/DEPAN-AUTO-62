import React, { useEffect } from 'react';

import '../css/Services.css';

import useRevealOnScroll from "../hooks/useRevealOnScroll";

import ServiceCard from "../components/ServiceCard.jsx";

// Services page
function Services() {

    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right");

    // change the title of the page
    useEffect(() => {
        document.title = "DEPAN AUTO 62 - Prestations";
    }, []);

    return (
        <div className="services-container">
            {/* Services Banner */}
            <div className="services-banner">
                <img src={`${import.meta.env.BASE_URL}/photos_depan_auto_62/depan_auto_62_prestations.jpg`} alt="Prestations DEPAN AUTO 62" className="services-banner-img"/>
                <div className="services-banner-title fade-in-up">
                    <h1>Découvrez nos prestations proposées !</h1>
                </div>
            </div>
            {/* Services part */}
            <div className="services-main-content fade-in-side-left">
                <h1 className="services-title">Nos prestations :</h1>
                <p className="services-note">
                     Les tarifs indiqués correspondent uniquement à la main-d’œuvre, hors frais de déplacement et hors pièces.
                </p>
                {/* List of services cards */}
                <div className="services-cards-list">
                    <ServiceCard
                        title="Système moteur"
                        description="Diagnostic, entretien et réparation moteur."
                        details={[
                            { name: "Révision moteur + filtre à huile", price: "30€ (1h00)" },
                            { name: "Révision moteur + tous les filtres", price: "45€ (1h30)" },
                            { name: "Remplacement pompe lave-glace", price: "30€ (1h00)" },
                            { name: "Remplacement réservoir liquide de frein", price: "30€ (1h00)" },
                            { name: "Remplacement support moteur", price: "30€ (1h00)" },
                            { name: "Remplacement débitmètre d'air", price: "30€ (1h00)" },
                            { name: "Remplacement vanne EGR", price: "30€ (1h00)" },
                            { name: "Remplacement démarreur", price: "30€ (1h00)" },
                            { name: "Remplacement alternateur", price: "30€ (1h00)" },
                            { name: "Remplacement galet tendeur courroie d'accessoire", price: "30€ (1h00)" },
                            { name: "Remplacement bougie d'allumage", price: "30€ (1h00)" },
                            { name: "Remplacement bobine d'allumage", price: "30€ (1h00)" },
                            { name: "Remplacement faisceaux d'allumage", price: "30€ (1h00)" },
                            { name: "Remplacement huile boîte de vitesses", price: "30€ (1h00)" },
                            { name: "Remplacement kit de distribution", price: "160€ (4h00)" }

                        ]}
                    />
                    
                    <ServiceCard
                        title="Système de freinage"
                        description="Contrôle, entretien et remplacement de vos freins."
                        details={[
                            { name: "Remplacement plaquettes avant", price: "30€ (1h00)" },
                            { name: "Remplacement disques et plaquettes avant", price: "30€ (1h00)" },
                            { name: "Remplacement plaquettes arrière", price: "30€ (1h00)" },
                            { name: "Remplacement disques et plaquettes arrière", price: "30€ (1h00)" },
                            { name: "Remplacement étrier de frein", price: "30€ (1h00)" }
                        ]}
                    />

                    <ServiceCard
                        title="Système de direction"
                        description="Vérification et réparation de la direction."
                        details={[
                            { name: "Remplacement rotule de direction", price: "30€ (1h00, les 2 côtés)" },
                            { name: "Remplacement rotule axiale + soufflet", price: "30€ (1h00, 1 côté)" },
                            { name: "Remplacement biellette de barre stab", price: "30€ (1h00, les 2 côtés)" },
                            { name: "Remplacement amortisseurs avec coupelles", price: "90 à 120€ (3h00 à 4h00)" },
                            { name: "Remplacement amortisseurs arrière", price: "30 à 60€ (1h00 à 2h00)" },
                            { name: "Remplacement triangles", price: "30 à 60€ (1h00 à 2h00)" },
                            { name: "Remplacement cardan complet", price: "30 à 60€ (1h00 à 2h00)" },
                            { name: "Remplacement ressort avant", price: "60€ (2h00)" },
                            { name: "Remplacement ressort arrière", price: "60€ (2h00)" }
                        ]}
                    />

                    <ServiceCard
                        title="Système échappement"
                        description="Entretien et remplacement de l’échappement."
                        details={[
                            { name: "Remplacement silencieux", price: "30€ (1h00)" },
                            { name: "Remplacement intermédiaire", price: "30€ (1h00)" },
                            { name: "Remplacement silent bloc échappement", price: "30€ (1h00)" },
                            { name: "Remplacement filtre à particule", price: "200€ (4h00)" }
                        ]}
                    />

                    <ServiceCard
                        title="Système électronique"
                        description="Dépannage et révision des pièces électroniques."
                        details={[
                            { name: "Passage valise diagnostic", price: "30€ (1h00)" },
                            { name: "Recherche de panne", price: "30€ (1h00)" },
                            { name: "Remplacement batterie", price: "15€ (30 min)" }
                        ]}
                    />
                </div>
                
            </div>
            
        </div>
    );
}

export default Services;
