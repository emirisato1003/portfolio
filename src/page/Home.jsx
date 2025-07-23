import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
// import projectsData from '../data/projects.json';

//react icon
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

// npm library
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

export default function Home() {
    const [featuredProjects, setFeaturedProjects] = useState([]);

    useEffect(() => {
        fetch('/data/projects.json')
            .then(res => res.json())
            .then(data => setFeaturedProjects(data.projects.filter(project => project.featured)));
    }, []);

    const featuredProEl = featuredProjects.sort((a, b) => b.id - a.id).map(p => {
        return (
            <div key={p.id} className={styles.featuredProjectBox}>
                <Link to={`/projects/${p.id}`}>
                    <div className={styles.imgContainer}>
                        <img src={p.pageImage !== "" ? p.pageImage : 'src/assets/images/image_substitute.jpg'} alt={`${p.title} image`} />
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.context.split(' ').slice(0, 21).join(" ")}...</p>
                </Link>
            </div>
        );
    });


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
            <hr />
            <div className={styles.featuredProjects}>
                {/* <h3>Featured Projects</h3> */}
                <div className={styles.scrollContainer}>
                    <div className={styles.scrollContent}>
                        {featuredProEl}
                    </div>
                </div>
            </div>
            <Link to='/projects'><button className={styles.ctaBtn}>See all my projects</button></Link>
        </main>
    );
}
