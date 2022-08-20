import React from 'react';
import { NavLink } from 'react-router-dom';
import './Style.css'

function Navbar () {
    return (
        <nav className='nav'>
            <h1 className='logo'>Victor Mmulah</h1>
            <NavLink to="/" className='link'>Home</NavLink>
            <NavLink to="/Education" className='link'>Education</NavLink>
            <NavLink to="/Skills" className='link'>Skills</NavLink>
            <NavLink to="/Contact" className='link'>Contact</NavLink>
        </nav>
    );
}

export default Navbar;