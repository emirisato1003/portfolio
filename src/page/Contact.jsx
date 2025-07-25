import React from 'react';
import styles from './Contact.module.css';
//react icon
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Contact() {
    return (
        <main className={`${styles.contact} gradient`}>
            <div className="main-container">
                <div className={`${styles.contactContainer} heading`}>
                    <h1>Contact</h1>
                    <p>Please reach out if you have any questions! I'm happy to jump on a video call to brainstorm projects and ideas. <br /> Send me an email at <a href="mailto:emirisato1003@gmail.com">emirisato1003@gmail.com</a></p>
                </div>
                <div className={styles.contactSocialLinkContainer}>
                    <h1>Social</h1>
                    <div className='social-links'>
                        <a href="https://www.linkedin.com/in/emirisato/" target='_blank' className='social-icon-link'><FaLinkedin className='social-icon' /></a>
                        <a href="https://github.com/emirisato1003" target='_blank' className='social-icon-link'><FaGithub className='social-icon' /></a>
                        <a href="http://www.youtube.com/@e.schannel1997" target='_blank' className='social-icon-link'><FaYoutube className='social-icon' /></a>
                    </div>
                </div>
            </div>
        </main>
    );
}
