import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

function Navbar () {
    return (
        <nav className='nav'>
            <NavLink to="/" className='logo'>Victor<span className='my_name'>Mmulah</span></NavLink>
            <NavLink to="/" className='link'>Home</NavLink>
            <NavLink to="/skills" className='link'>Skills</NavLink>
            <NavLink to="/blogs" className='link'>Blogs</NavLink>
            <NavLink to="/contact" className='link'>Contact</NavLink>
        </nav>
    );
}

export default Navbar;