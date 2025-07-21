import { useEffect, useRef, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import styles from './Project.module.css';

export default function Project() {
    const listStyles = { justifyContent: 'flex-start' };
    const { id } = useParams();
    const [project, setProject] = useState([]);
    const location = useLocation();
    const projectHeaderRef = useRef(null);
    console.log(location)
    useEffect(() => {
        fetch('/data/projects.json')
            .then(res => res.json())
            .then(data => {
                const foundProject = data.projects.filter(item => item.id == id);
                setProject(foundProject[0]);
            });
        projectHeaderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [id]);

    const videoEl = project.videos && project.videos.map(video => (
        <div key={video.id} className={styles.videoFrame}>
            <iframe
                src={video.url}
                frameBorder="0"
                title='Youtube video player'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    ));
    return (
        <>
            <header className={`${styles.projectHero} gradient`} ref={projectHeaderRef}>
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
            <section className={styles.sectionCont}>
                <div className={styles.projectContents}>
                    <div className={styles.projectImgCont}>
                        <img src={`/${project.thumbnail}`} alt={`${project.title}`} />
                    </div>
                    <div className={styles.projectDetails}>
                        <div className={styles.projectOverview}>
                            <h2>Project Overview</h2>
                            <p>{project.overview}</p>
                        </div>
                        {project.videos && project.videos.length > 0 &&
                            <div className={styles.projectVideoCont}>
                                <h2>Project Video</h2>
                                {
                                    project.videos ? videoEl
                                        : "loading..."
                                }
                            </div>
                        }
                        <div className={styles.projectTools}>
                            <h2>Tools Used</h2>
                            <ul className='skills-lists' style={listStyles}>
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
                        <div className={styles.goBackLink}>
                            <Link to={`/projects?page=${location?.state.page}&tech=${location?.state.tech}`}>&larr; Back to projects List</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
