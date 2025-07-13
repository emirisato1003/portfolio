import React, { useState } from 'react';
import projectsData from '../data/projects.json';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css'

export default function Projects() {
    const [projects, setProjects] = useState(projectsData.projects);
    const sortedProjects = projects.sort((a, b) => b.id - a.id)
    console.log(sortedProjects)
    const projectsEl = sortedProjects.map(project => (
        <article key={project.id} className={styles.projectContainer}>
            <div className={styles.projectImgContainer}>
                <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
            </div>
            <div className={styles.linkContents}>
                <h2>{project.title}</h2>
                <p>{project.context}</p>
                <Link to={`/projects/${project.id}`}><button>learn more</button></Link>
            </div>
        </article>
    )
    );

    return (
        <>
            <section className='main-container'>
                <div className={`${styles.projectHeading} heading`}>
                    <h1>Projects</h1>
                    <span>All my projects include links to the code or/and live version. Click the button to learn more about each one.</span>
                </div>
                {projectsEl}
            </section>
        </>
    );
}
