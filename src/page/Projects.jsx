import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Projects.module.css';

// react icon
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/data/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data.projects));
    }, []);
    const sortedProjects = projects.sort((a, b) => b.id - a.id);

    /*** Pagination ***/
    const itemsPerPage = 3;
    const currentPage = parseInt(searchParams.get('page') || '1');
    const totalItems = sortedProjects.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const currentItems = sortedProjects.slice(startIndex, endIndex);

    const handleNextPage = () => {
        setSearchParams({ page: currentPage + 1 });
    };

    const handlePreviousPage = () => {
        setSearchParams({ page: currentPage - 1 });
    };

    const handlePage = (n) => {
        setSearchParams({ page: n });
    };

    const projectsEl = currentItems.map(project => (
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
                <div className={styles.pagination}>
                    <button aria-label='pagination previous button' disabled={currentPage === 1} onClick={handlePreviousPage} className={styles.paginationBtn}><IoIosArrowBack className={styles.paginationArrow} /></button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button key={i} className={`${styles.pageNumber} ${currentPage === i + 1 ? styles.selected : ''}`} aria-label='page number button' onClick={() => handlePage(i + 1)}>{i + 1}</button>
                    ))}
                    <button aria-label='pagination next button' disabled={currentPage === totalPages} onClick={handleNextPage} className={styles.paginationBtn}><IoIosArrowForward className={styles.paginationArrow} /></button>
                </div>
                {projectsEl}
                <div className={styles.pagination}>
                    <button aria-label='pagination previous button' disabled={currentPage === 1} onClick={handlePreviousPage} className={styles.paginationBtn}><IoIosArrowBack className={styles.paginationArrow} /></button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button key={i} className={`${styles.pageNumber} ${currentPage === i + 1 ? styles.selected : ''}`} aria-label='page number button' onClick={() => handlePage(i + 1)}>{i + 1}</button>
                    ))}
                    <button aria-label='pagination next button' disabled={currentPage === totalPages} onClick={handleNextPage} className={styles.paginationBtn}><IoIosArrowForward className={styles.paginationArrow} /></button>
                </div>
            </main>
        </>
    );
}
