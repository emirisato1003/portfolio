import React from 'react';
//react icon
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-contents">
                    <h2>Emiri Sato</h2>
                    <p>A front-end developer crafting seamless, user-friendly websites and web applications from concept to completion with a focus on great design and usability.</p>
                </div>
                <div className="footer-social-link">
                    <a href="https://www.linkedin.com/in/emirisato/" target='_blank' className='social-icon-link'><FaLinkedin /></a>
                    <a href="https://github.com/emirisato1003" target='_blank' className='social-icon-link'><FaGithub /></a>
                    <a href="http://www.youtube.com/@e.schannel1997" target='_blank' className='social-icon-link'><FaYoutube /></a>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>&copy; Copyright 2025. Made by <b>Emiri Sato</b></p>
            </div>
        </footer>
    );
}
