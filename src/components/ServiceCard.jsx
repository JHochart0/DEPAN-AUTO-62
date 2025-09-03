import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "../css/ServiceCard.css";

function ServiceCard({ title, description, details }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => setIsOpen(!isOpen);

  return (
    <div className={`service-card ${isOpen ? "open" : ""}`} onClick={toggleCard}>
      {/* En-tête */}
      <div className="service-card-header" onClick={toggleCard}>
        <h2>{title}</h2>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="service-card-icon"
        />
      </div>

      {/* Description visible tout le temps */}
      {description && <p className="service-card-description">{description}</p>}

      {/* Contenu déroulant */}
      <div className={`service-card-details ${isOpen ? "show" : ""}`} >
        <ul>
          {details.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceCard;