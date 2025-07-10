import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectData from '../data/projects.json';

export default function Project() {
    const { id } = useParams();
    const getProject = projectData.projects.filter(item => item.id == id);
    const [project, setProject] = useState(getProject[0]);

    return (
        <>
            <header>
                <Link to='/projects'>&larr; Back to projects List</Link>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                {project.liveUrl ? <a href={project.liveUrl} target='_blank'><button>Live Link</button></a> : <a href={project.githubUrl} target='_blank'><button>Code Link</button></a>}
            </header>
            <section>
                <img src={project.pageImage} alt={`${project.title} main page`} />
                <h2>Project Overview</h2>
                <p>{project.overview}</p>
                <h2>Tools Used</h2>
                <div className="techs">
                    <ul>
                        {project.technologies.map(tech => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </div>
                <h2>See a Demo</h2>
                <div className="demoLinks">
                    {project.liveUrl && <a href={project.liveUrl} target='_blank'><button>Live Link</button></a>}
                    <a href={project.githubUrl} target='_blank'><button>Code link</button></a>
                </div>
            </section>
        </>
    );
}
