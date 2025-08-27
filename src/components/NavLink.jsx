import React from 'react'
import { NavLink as RRNavLink, useLocation } from "react-router-dom";

//this component is used to create buttons to navigate in differents routes of the website
function NavLink(props) {
    const to=props.to;
    const content=props.content;
    const id=props.id;
    
    return (
        <RRNavLink
            className={({ isActive }) => `navLink ${isActive ? "active" : ""}`}
            id={id}
            to={to}
        >
            {props.children}{content}
        </RRNavLink>
    );
}

export default NavLink;
