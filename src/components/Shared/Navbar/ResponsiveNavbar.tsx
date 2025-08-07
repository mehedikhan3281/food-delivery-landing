"use client"
import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const ResponsiveNavbar = () => {
    const [showNav, setShowNav] = useState(false);
    const navOpen = () => {
        setShowNav(true);
    }

    const navClose = () => {
        setShowNav(false);
    }
    return (
        <div>
            <Nav navOpen={navOpen}/>
            <MobileNav showNav={showNav} navClose={navClose}/>
        </div>
    );
};

export default ResponsiveNavbar;