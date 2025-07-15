import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Projects.module.css';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch('/data/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data.projects));
    }, []);
    const sortedProjects = projects.sort((a, b) => b.id - a.id);

    const projectsEl = sortedProjects.map(project => (
        <article key={project.id} className={styles.projectContainer}>
            <div className={styles.projectImgContainer}>
                <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
            </div>
            <div className={styles.linkContents}>
                <h2>{project.title}</h2>
                <p>{project.context}</p>
                <button onClick={() => navigate(`/projects/${project.id}`)} aria-label='learn more'>learn more</button>
            </div>
        </article>
    )
    );

    return (
        <>
            <main className='main-container'>
                <header className={`${styles.projectHeading} heading`}>
                    <h1>Projects</h1>
                    <p>All my projects include links to the code or/and live version. Click the button to learn more about each one.</p>
                </header>
                {projectsEl}
            </main>
        </>
    );
}
