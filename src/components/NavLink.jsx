import React from 'react'
import { Link } from "react-router-dom";

//this component is used to create buttons to navigate in differents routes of the website
function NavLink(props) {
    const to=props.to;
    const content=props.content;
    const id=props.id;
    return (
        <Link className="navLink" id={id} to={to}>{props.children}{content}</Link>
    );
}

export default NavLink;
