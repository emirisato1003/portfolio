import React from 'react';
import styles from './Footer.module.css'

//react icon
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <div className={styles.footerTop}>
                    <div className={styles.footerContent}>
                        <h4>Emiri Sato</h4>
                        <p>A front-end developer crafting seamless, user-friendly websites and web applications from concept to completion with a focus on great design and usability.</p>
                    </div>
                    <div className={styles.footerSocialLinks}>
                        <h4>Social</h4>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/emirisato/" target='_blank' className={`${styles.socialIconLink} social-icon-link`}><FaLinkedin className='social-icon'/></a>
                            <a href="https://github.com/emirisato1003" target='_blank' className={`${styles.socialIconLink} social-icon-link`}><FaGithub className='social-icon'/></a>
                            <a href="http://www.youtube.com/@e.schannel1997" target='_blank' className={`${styles.socialIconLink} social-icon-link`}><FaYoutube className='social-icon'/></a>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; Copyright 2025. Made by <b>Emiri Sato</b></p>
                </div>
            </div>
        </footer>
    );
}
