import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import projectsData from '../data/projects.json';

//react icon
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

// npm library
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

export default function Home() {
    const projects = projectsData.projects;
    const [featuredProjects, setFeaturedProjects] = useState(projects.filter(p => p.featured === true));
    const featuredProEl = featuredProjects.map(p => (
        <div key={p.id} className={styles.featuredProjectBox}>
            <img src={p.pageImage} alt={`${p.title} image`} />
            <h2>{p.title}</h2>
            {/* <p>{p.context}</p> */}
        </div>
    ));
    return (
        <main className={`${styles.hero} gradient`}>
            <div className={styles.heroContent}>
                <h1>hi, my name is emiri sato</h1>
                <h2>A front-end developer crafting seamless, user-friendly websites and web applications from concept to completion with a focus on great design and usability.</h2>
            </div>
            <div className='social-links'>
                <a href="https://www.linkedin.com/in/emirisato/" target='_blank' className='social-icon-link'><FaLinkedin className='social-icon' /></a>
                <a href="https://github.com/emirisato1003" target='_blank' className='social-icon-link'><FaGithub className='social-icon' /></a>
                <a href="http://www.youtube.com/@e.schannel1997" target='_blank' className='social-icon-link'><FaYoutube className='social-icon' /></a>
            </div>
            <div className={styles.featuredProjects}>
                <h2>Featured Projects</h2>
            </div>
            <Link to='/projects'><button className={styles.ctaBtn}>See all my projects</button></Link>
        </main>
    );
}
