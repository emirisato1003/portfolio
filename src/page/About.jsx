import React, { useEffect, useState } from 'react';
// import certificates from '../data/certificates.json';
// import { getCertificates } from '../utils/getData';

import styles from './About.module.css';
import { Link } from 'react-router-dom';

export default function About() {
    const [certificates, setCertificates] = useState([])
    useEffect(() => {
        fetch('/data/certificates.json')
            .then(res => res.json())
            .then(data => setCertificates(data.certificates))
    }, [])
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'PHP', 'Django', 'Object-Oriented Programming (OOP)', 'Bootstrap', 'SQL', 'JSON', 'Figma', 'Responsive UIs', 'Squarespace', 'Wix', 'Git', 'Github'];
    return (
        <main className='gradient'>
            <div className="main-container">
                <div className={`${styles.aboutIntro} heading`}>
                    <h1>About me</h1>
                    <span>As a recent graduate with an Associate’s degree in Web Development, I am fluent in both Japanese and English. Raised in Japan and now based in the US, my diverse background allows me to adapt to different cultural contexts and provide web solutions that connect with users worldwide.</span>
                </div>
                <div className={styles.aboutContents}>
                    <div className={styles.certificates}>
                        <h2>Certificates</h2>
                        <ul className={styles.certificatesLists}>
                            {certificates.map(cert =>
                                <li key={cert.id}>
                                    <a href={cert.credential}>{cert.title}</a>
                                    <p className={styles.credentialDate}><span><b>{cert.organization}</b></span> - Issued {cert.issuedDate}</p>
                                </li>)}
                        </ul>
                    </div>
                    <div className='skills'>
                        <h2>Skills</h2>
                        <ul className='skills-lists'>
                            {skills.map(skill => <li key={skill}>{skill}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
