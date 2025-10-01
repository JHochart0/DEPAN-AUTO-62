import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "../css/ServiceCard.css";

// this component is used to show one service card with its details
function ServiceCard({ title, description, details }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = () => setIsOpen(!isOpen);

    return (
        <div className={`service-card ${isOpen ? "open" : ""}`} onClick={toggleCard}>
            {/* Header of the card */}
            <div className="service-card-header" onClick={toggleCard}>
                <h2>{title}</h2>
                <FontAwesomeIcon
                    icon={isOpen ? faChevronUp : faChevronDown}
                    className="service-card-icon"
                />
            </div>

            {/* Description always visible */}
            {description && <p className="service-card-description">{description}</p>}

            {/* Drop-down content */}
            <div className={`service-card-details ${isOpen ? "show" : ""}`} >
                <ul>
                {details.map((item, index) => (
                    <li key={index}>
                        <span>{item.name} - </span>
                        <span className="service-card-details-price" >{item.price}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
  );
}

export default ServiceCard;