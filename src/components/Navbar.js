import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar () {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Education">Education</NavLink>
            <NavLink to="/Skills">Skills</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
        </nav>
    );
}

export default Navbar;