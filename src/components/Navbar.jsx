import React from 'react';
import NavLink from "./NavLink.jsx";

function Navbar(props) {
    const className = props.className;

    return (
        <nav className={className}>
            <NavLink to="/" content="Accueil" id="navbar-homeLink"/>
            <NavLink to="/services" content="Prestations" id="navbar-servicesLink"/>
            <NavLink to="/photos" content="Galerie photos" id="navbar-photosLink"/>
            <NavLink to="/contact" content="Contact" id="navbar-contactLink"/>
        </nav>
    );
}
    
export default Navbar;
