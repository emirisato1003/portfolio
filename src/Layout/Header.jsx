import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import profile from '../assets/images/profile_image.jpg';
import styles from './Header.module.css';

import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
    const [navListShown, setNavListShown] = useState(false);
    const activeStyles = {
        color: 'var(--primary-color)'
    };
    return (
        <header>
            <nav>
                <Link to='/' className={styles.logoContainer}>
                    <div className={styles.logoImgContainer}>
                        <img src={profile} alt="profile icon" className={styles.headerLogo} />
                    </div>
                    <span className={styles.logoSub}>Emiri Sato</span>
                </Link>
                <div className={styles.headerNav}>
                    <div className={styles.navLists}>
                        <NavLink style={({ isActive }) => isActive ? activeStyles : null} to='/projects'>Projects</NavLink>
                        <NavLink style={({ isActive }) => isActive ? activeStyles : null} to='/about'>About</NavLink>
                        <NavLink style={({ isActive }) => isActive ? activeStyles : null} to='/contact'>Contact</NavLink>
                    </div>
                </div>
                {navListShown
                    ? <div
                        className={styles.hamburgerListContainer}
                        aria-label='nav menu open'
                        onClick={() => setNavListShown(prev => !prev)}>
                        <RxCross2 />
                    </div>
                    : <div
                        className={styles.hamburgerListContainer}
                        aria-label='nav menu close'
                        onClick={() => setNavListShown(prev => !prev)}>
                        <IoMenu />
                    </div>}

                <div className={styles.hamburgerNavLists} >
                    {navListShown &&
                        <div className={styles.navLists}>
                            <NavLink style={({ isActive }) => isActive ? activeStyles : null} to='/projects'>Projects</NavLink>
                            <NavLink style={({ isActive }) => isActive ? activeStyles : null} to='/about'>About</NavLink>
                            <NavLink style={({ isActive }) => isActive ? activeStyles : null} to='/contact'>Contact</NavLink>
                        </div>
                    }
                </div>
            </nav>
        </header>
    );
}
