import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Project.module.css';

export default function Project() {
    const listStyles = {justifyContent: 'flex-start'}
    const { id } = useParams();
    const [project, setProject] = useState([]);
    useEffect(() => {
        fetch('/data/projects.json')
            .then(res => res.json())
            .then(data => {
                const foundProject = data.projects.filter(item => item.id == id);
                setProject(foundProject[0]);
            });
    }, [id]);

    return (
        <>
            <header className={`${styles.projectHero} gradient`}>
                <div className={styles.heroContents}>
                    <h1>{project.title}</h1>
                    <div className={styles.heroDescription}>
                        <p>{project.description}</p>
                    </div>
                    <div className={styles.heroCta}>
                        {project.liveUrl ? <a href={project.liveUrl} target='_blank'><button>Live Link</button></a> : <a href={project.githubUrl} target='_blank'><button>Code Link</button></a>}
                    </div>
                </div>
            </header>
            <section>
                <Link to='/projects'>&larr; Back to projects List</Link>
                <div className={styles.projectContents}>
                    <div className={styles.projectImgCont}>
                        <img src={`/${project.thumbnail}`} alt={`${project.title}`} />
                    </div>
                    <div className={styles.projectDetails}>
                        <div className={styles.projectOverview}>
                            <h2>Project Overview</h2>
                            <p>{project.overview}</p>
                        </div>
                        <div className={styles.projectVideo}>
                            <h2>Project Video</h2>
                        </div>
                        <div className={styles.projectTools} style={listStyles}>
                            <h2>Tools Used</h2>
                            <ul className='skills-lists'>
                                {project.technologies && project.technologies.map(tech => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.demoLinksCont}>
                            <h2>See a Demo</h2>
                            <div className={styles.demoLinks}>
                                {project.liveUrl && <a href={project.liveUrl} target='_blank'><button>Live Link</button></a>}
                                <a href={project.githubUrl} target='_blank'><button>Code link</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
