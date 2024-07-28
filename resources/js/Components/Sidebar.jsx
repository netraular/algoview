import React from 'react';
import { Link } from '@inertiajs/react';
import ThemeToggle from './ThemeToggle';
import JiraButton from './Dev/JiraButton';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../../css/Sidebar.css';

const Sidebar = ({ algorithms, onSelectAlgorithm, isOpen, isMobile, navbarHeight }) => {
    const sidebarStyle = {
        minHeight: isMobile ? `calc(100vh - ${navbarHeight}px)` : '100vh',
        overflow: 'hidden',
        transition: 'width 0.3s',
        visibility: isOpen ? 'visible' : 'hidden',
        pointerEvents: isOpen ? 'auto' : 'none',
        width: isOpen ? '250px' : '0',
    };

    return (
        <div className="d-flex flex-column bg-light p-3" style={sidebarStyle} id='MainMenu'>
            {!isMobile && (
                <Link href={route('welcome')} className="d-flex justify-content-between align-items-center text-decoration-none">
                    <img src="/favicon.png" alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                    <h4 className="mb-0">
                        <b style={{ fontFamily: 'PixelifySans', color: 'red', marginRight: '10px' }}> Algorithm</b>
                        <b style={{ fontFamily: 'PixelifySans', color: 'Coral' }}>Xplore</b>
                    </h4>
                </Link>
            )}
            <Accordion defaultActiveKey="0">
                <Card className='custom-card'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='custom-card-header'>Sorting Algorithms</Accordion.Header>
                        <Accordion.Body className='custom-card-body'>
                            <ListGroup variant="flush">
                            {algorithms.map((algorithm, index) => (
                                <ListGroup.Item
                                key={index}
                                action
                                className='custom-card-item'
                                onClick={() => onSelectAlgorithm(algorithm)}
                                >
                                {algorithm.name}
                                </ListGroup.Item>
                            ))}
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Card>
                <Card className='custom-card'>
                    <Accordion.Item eventKey="1">
                    <Accordion.Header className='custom-card-header'>Finding Algorithms</Accordion.Header>
                    <Accordion.Body className='custom-card-body'>
                        <ListGroup variant="flush">
                        {algorithms.map((algorithm, index) => (
                            <ListGroup.Item
                            key={index}
                            action
                            className='custom-card-item'
                            onClick={() => onSelectAlgorithm(algorithm)}
                            >
                            {algorithm.name}
                            </ListGroup.Item>
                        ))}
                        </ListGroup>
                    </Accordion.Body>
                    </Accordion.Item>
                </Card>
            </Accordion>
            <JiraButton />
            <div className="mt-3 d-flex mb-3">
                <a title="GitHub Repository" href="https://github.com/netraular/algoview" target="_blank" rel="noopener noreferrer" className="btn btn-secondary me-2">
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