import React, { useState } from 'react';
import projectsData from '../data/projects.json';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css'

export default function Projects() {
    const [projects, setProjects] = useState(projectsData.projects);
    
    const projectsEl = projects.map(project => (
        <article key={project.id} className={styles.projectContainer}>
            <div className={styles.projectImgContainer}>
                <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
            </div>
            <div className={styles.linkContents}>
                <h1>{project.title}</h1>
                <p>{project.context}</p>
                <Link to={`/projects/${project.id}`}><button>learn more</button></Link>
            </div>
        </article>
    )
    );

    return (
        <>
            <section>
                <h1>Projects</h1>
                <p>All my projects include links to the code or/and live version. Click the button to learn more about each one.</p>
                {projectsEl}
            </section>
        </>
    );
}
