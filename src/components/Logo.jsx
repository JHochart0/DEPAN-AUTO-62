import React from 'react';

import { NavLink } from 'react-router-dom';

import logo from '../assets/img/DEPANAUTO62_Logo.jpg';

//this component is the logo of the website that brings to the homepage when clicked on
function Logo() {
    return (
        <NavLink to="/" content="" className="logo">
            <img src={logo} alt="Logo DEPANAUTO62" className="logo-img"></img>
            <div className="logo-text">
                <h1 className="logo-title"><span>-</span>DEPAN AUTO 62<span>-</span></h1>
                <h4 className="logo-slogan">VOTRE MÉCANICIEN À DOMICILE</h4>
            </div>
        </NavLink>
    );
}

export default Logo;
