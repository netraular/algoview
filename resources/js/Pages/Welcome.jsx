// resources/js/Pages/Welcome.jsx

import React from 'react';
import { Link, Head } from '@inertiajs/react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../css/fonts.css'; // Importa el archivo CSS

const Welcome = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Head title="Welcome to Algorithm Visualization"/>

            {/* Header */}
            <header className="bg-primary text-white text-center py-4">
                <h1 className="display-4 d-flex justify-content-center align-items-center">
                    
                <img src="favicon.png" alt="Logo" style={{ width: '70px', height: '70px', marginRight: '10px' }} />       
                    <b style={{ fontFamily: 'PixelifySans', color: 'red', marginRight: '10px' }}> Algorithm</b>
                    <b style={{ fontFamily: 'PixelifySans', color: 'Coral' }}>Xplore</b>             
                </h1>
            </header>

            {/* Body */}
            <main className="flex-grow-1 container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <p className="lead">
                            Our project aims to provide a visual representation of various algorithms, helping you understand their functionality and efficiency through interactive visualizations.
                        </p>
                        <Link href="/algorithms" className="btn btn-lg btn-outline-primary mt-4">
                            <i className="bi bi-arrow-right-circle-fill me-2"></i>
                            Go to Algorithms Menu
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-light text-center py-3">
                <p className="mb-0">
                    &copy; {new Date().getFullYear()} NETSHIBA. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Welcome;