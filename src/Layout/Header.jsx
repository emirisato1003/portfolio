import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import profile from '../assets/images/profile_image.jpg';
import styles from './Header.module.css';

export default function Header() {
    const activeStyles = {
        color: 'red'
    };
    return (
        <header>
            <nav>
                <div className={styles.headerLogoContainer}>
                    <Link to='/'><img src={profile} alt="profile icon" className={styles.headerLogo} /></Link>
                    <Link to='/'>Emiri Sato</Link>
                </div>
                <div className={styles.headerNav}>
                    <NavLink style={({ isActive }) => isActive ? activeStyles : null} to='/projects'>Projects</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyles : null} to='/about'>About</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyles : null} to='/contact'>Contact</NavLink>
                </div>
            </nav>
        </header>
    );
}
