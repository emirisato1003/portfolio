import React from 'react';
import { Link } from 'react-router-dom';

//react icon
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Home() {
    return (
        <main className='home-main gradient'>
            <h1>hi, my name is emiri sato</h1>
            <h2>A front-end developer crafting seamless, user-friendly websites and web applications from concept to completion with a focus on great design and usability.</h2>
            <Link to='/projects'><button>See my projects</button></Link>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/emirisato/" target='_blank' className='social-icon-link'><FaLinkedin /></a>
                <a href="https://github.com/emirisato1003" target='_blank' className='social-icon-link'><FaGithub /></a>
                <a href="http://www.youtube.com/@e.schannel1997" target='_blank' className='social-icon-link'><FaYoutube /></a>
            </div>
        </main>
    );
}
