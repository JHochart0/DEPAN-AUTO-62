import React from 'react';

import Navbar from './Navbar';
import Logo from './Logo';
import PhoneButton from './PhoneButton';

function Header() {

    return (
        <header className="header-container">
            <Logo />
            <Navbar className="header-navbar"/>
            <PhoneButton />
        </header>
    );
}

export default Header;
