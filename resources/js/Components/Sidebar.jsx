// resources/js/Components/Sidebar.jsx

import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import ThemeToggle from './ThemeToggle';

const Sidebar = ({ algorithms, onSelectAlgorithm }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isOpen, setIsOpen] = useState(!isMobile);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setIsOpen(!isMobile);
    }, [isMobile]);

    return (
        <div className="d-flex flex-column bg-light p-3" style={{ width: '250px', minHeight: '100vh', display: isMobile ? 'none' : 'flex' }}>
            <Link href={route('welcome')} className="d-flex justify-content-between align-items-center text-decoration-none">
                <img src="/favicon.png" alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />       
                <h4 className="mb-0">
                    <b style={{ fontFamily: 'PixelifySans', color: 'red', marginRight: '10px' }}> Algorithm</b>
                    <b style={{ fontFamily: 'PixelifySans', color: 'Coral' }}>Xplore</b>             
                </h4>
            </Link>
            <ul className="list-group flex-grow-1 mt-3">
                {algorithms.map((algorithm, index) => (
                    <li key={index} className="list-group-item" onClick={() => onSelectAlgorithm(algorithm)}>
                        {algorithm.name}
                    </li>
                ))}
            </ul>
            <div className="mt-3">
                <a title="Jira Board" href="https://netshiba.atlassian.net/jira/software/projects/AL/boards/1" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <i className="bi bi-list-task"></i>
                </a>
                <a title="GitHub Repository" href="https://github.com/netraular/algoview" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <i className="bi bi-github"></i> Github
                </a>
                <a title="Wiki documentation" href="https://wiki.netshiba.com" target="_blank" rel="noopener noreferrer" className="btn btn-info">
                    <i className="bi bi-book"></i> Wiki
                </a>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-auto">
                <span>© Netshiba</span>
                <ThemeToggle />
            </div>
        </div>
    );
};

export default Sidebar;