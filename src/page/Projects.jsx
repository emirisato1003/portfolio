import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Projects.module.css';

// react icon
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Projects() {

    const [projects, setProjects] = useState([]);
    const [_, setTechnology] = useState('all');
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();
    const paginationRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        fetch('/data/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data.projects));
    }, []);

    const techs = projects.map(i => i.technologies).flat();
    const techArrays = Array.from(new Set(techs));

    const techFilter = searchParams.get('tech') || 'all';
    const filteredProjects = projects.filter(project => techFilter === 'all' ? projects : project.technologies.includes(techFilter));
    const sortedProjects = filteredProjects.sort((a, b) => b.id - a.id);

    /*** Pagination ***/
    const itemsPerPage = 3;
    const currentPage = parseInt(searchParams.get('page') || '1');
    const totalItems = sortedProjects.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const currentItems = sortedProjects.slice(startIndex, endIndex);

    useEffect(() => {
        paginationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [currentPage, location.pathname]);

    const handleNextPage = () => {
        setSearchParams({ page: currentPage + 1, tech: techFilter });
    };

    const handlePreviousPage = () => {
        setSearchParams({ page: currentPage - 1, tech: techFilter });
    };

    const handlePage = (n) => {
        setSearchParams({ page: n, tech: techFilter });
    };

    const handleChange = (e) => {
        e.preventDefault();
        setTechnology(e.target.value);
        setSearchParams({ page: '1', tech: e.target.value });
    };

    const navigateOption = { state: { page: currentPage, tech: techFilter } };

    const projectsEl = currentItems.map(project => (
        <article key={project.id} className={styles.projectContainer}>
            <div className={styles.projectImgContainer}>
                <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
            </div>
            <div className={styles.linkContents}>
                <h2>{project.title}</h2>
                <p>{project.context}</p>
                <button onClick={() => navigate(`/projects/${project.id}`, navigateOption)} aria-label='learn more'>learn more</button>
            </div>
        </article>
    )
    );

    return (
        <>
            <main className='main-container'>
                <header className={`${styles.projectHeading} heading`} ref={paginationRef}>
                    <h1>Projects</h1>
                    <p>All my projects include links to the code or/and live version. Click the button to learn more about each one.</p>
                </header>
                <div className={styles.searchContainer}>
                    <div className={styles.pagination}>
                        <button
                            aria-label='pagination previous button'
                            disabled={currentPage === 1} onClick={handlePreviousPage}
                            className={styles.paginationBtn}>
                            <IoIosArrowBack
                                className={styles.paginationArrow} />
                        </button>

                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                className={`${styles.pageNumber} ${currentPage === i + 1 ? styles.selected : ''}`}
                                aria-label='page number button'
                                onClick={() => handlePage(i + 1)}>
                                {i + 1}
                            </button>
                        ))}
                        <button
                            aria-label='pagination next button'
                            disabled={currentPage === totalPages}
                            onClick={handleNextPage}
                            className={styles.paginationBtn}>
                            <IoIosArrowForward
                                className={styles.paginationArrow} />
                        </button>
                    </div>
                    <form>
                        <select onChange={handleChange}>
                            <option value='all'>all</option>
                            {techArrays.map(tech => (
                                <option key={tech} value={tech} selected={techFilter === tech}>{tech}</option>
                            ))}
                        </select>
                    </form>
                </div>
                {projectsEl}
                <div
                    className={styles.pagination}>
                    <button
                        aria-label='pagination previous button'
                        disabled={currentPage === 1} onClick={handlePreviousPage}
                        className={styles.paginationBtn}>
                        <IoIosArrowBack
                            className={styles.paginationArrow} />
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.pageNumber} ${currentPage === i + 1 ? styles.selected : ''}`}
                            aria-label='page number button'
                            onClick={() => handlePage(i + 1)}>
                            {i + 1}
                        </button>
                    ))}
                    <button
                        aria-label='pagination next button'
                        disabled={currentPage === totalPages}
                        onClick={handleNextPage}
                        className={styles.paginationBtn}>
                        <IoIosArrowForward
                            className={styles.paginationArrow} />
                    </button>
                </div>
            </main>
        </>
    );
}
