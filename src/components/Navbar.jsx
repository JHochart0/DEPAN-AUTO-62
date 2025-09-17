import React from 'react';
import NavLink from "./NavLink.jsx";

//this component is the navbar used in the header
function Navbar(props) {
    const className = props.className;
    const onLinkClick = props.onLinkClick;

    return (
        <nav className={className}>
            <NavLink to="/" content="Accueil" id="navbar-homeLink" onClick={onLinkClick}/>
            <NavLink to="/services" content="Prestations" id="navbar-servicesLink" onClick={onLinkClick}/>
            <NavLink to="/photos" content="Galerie photos" id="navbar-photosLink" onClick={onLinkClick}/>
            <NavLink to="/contact" content="Contact" id="navbar-contactLink" onClick={onLinkClick}/>
        </nav>
    );
}
    
export default Navbar;
