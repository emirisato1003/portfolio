import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import profile from '../assets/images/profile_image.jpg'
export default function Header() {
    const activeStyles = {
        color: 'red'
    };
    return (
        <header>
            <nav>
                <div className="header-logo-container">
                    <Link to='/'><img src={profile} alt="profile icon" className='header-logo'/>Emiri Sato</Link>
                </div>
                <div className="header-nav">
                    <NavLink style={({ isActive }) => isActive ? activeStyles : null} to='/projects'>Projects</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyles : null} to='/about'>About</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyles : null} to='/contact'>Contact</NavLink>
                </div>
            </nav>
        </header>
    );
}
