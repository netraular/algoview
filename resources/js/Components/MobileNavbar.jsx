import React from 'react';
import { Link } from '@inertiajs/react';
import ThemeToggle from './ThemeToggle';

const MobileNavbar = ({ isOpen, toggleSidebar, className }) => {
    return (
        <div className={`d-flex justify-content-between align-items-center bg-light p-3 ${className}`} style={{ width: '100%' }}>
            <button className="btn btn-link" onClick={toggleSidebar}>
                <i className="bi bi-list"></i>
            </button>
            <Link href={route('welcome')} className="d-flex justify-content-center align-items-center text-decoration-none" style={{ flex: 1 }}>
                <img src="/favicon.png" alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />       
                <h4 className="mb-0">
                    <b style={{ fontFamily: 'PixelifySans', color: 'red', marginRight: '10px' }}> Algorithm</b>
                    <b style={{ fontFamily: 'PixelifySans', color: 'Coral' }}>Xplore</b>             
                </h4>
            </Link>
        </div>
    );
};

export default MobileNavbar;