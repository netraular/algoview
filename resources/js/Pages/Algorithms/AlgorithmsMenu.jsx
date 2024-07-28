import React, { useState, useEffect } from 'react';
import { Head, usePage, router } from '@inertiajs/react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../../css/fonts.css'; // Importa el archivo CSS
import Sidebar from '../../Components/Sidebar';
import BubbleSort from './BarSort/BubbleSort';
import QuickSort from './BarSort/QuickSort';
import MergeSort from './BarSort/MergeSort';
import MobileNavbar from '../../Components/MobileNavbar'; // Asegúrate de importar MobileNavbar

const AlgorithmsMenu = () => {
    const algorithms = [
        { type: 'BarSort', name: 'BubbleSort', component: BubbleSort },
        { type: 'BarSort', name: 'QuickSort', component: QuickSort },
        { type: 'BarSort', name: 'MergeSort', component: MergeSort },
        // Agrega más algoritmos aquí con su tipo y componente correspondiente
    ];

    const { selectedAlgorithm } = usePage().props;
    const [currentAlgorithm, setCurrentAlgorithm] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isOpen, setIsOpen] = useState(!isMobile);
    const [navbarHeight, setNavbarHeight] = useState(0);

    useEffect(() => {
        if (selectedAlgorithm) {
            const algorithm = algorithms.find(algo => algo.name === selectedAlgorithm);
            if (algorithm) {
                setCurrentAlgorithm(() => algorithm.component);
            }
        }
    }, [selectedAlgorithm]);

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

    useEffect(() => {
        const navbar = document.querySelector('.mobile-navbar');
        if (navbar) {
            setNavbarHeight(navbar.offsetHeight);
        }
    }, [isMobile]);

    const handleSelectAlgorithm = (algorithm) => {
        router.visit(`/algorithms/BarSort/${algorithm.name}`, {
            method: 'get',
            only: ['selectedAlgorithm'],
        });
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
            <Head title="Algorithms Menu" />

            {isMobile && <MobileNavbar isOpen={isOpen} toggleSidebar={toggleSidebar} className="mobile-navbar" />}
            <div className="d-flex flex-grow-1">
                <Sidebar algorithms={algorithms} onSelectAlgorithm={handleSelectAlgorithm} isOpen={isOpen} isMobile={isMobile} navbarHeight={navbarHeight} />
                <div className="flex-grow-1 p-3">
                    {currentAlgorithm ? <ComponentRenderer component={currentAlgorithm} /> : <h1>Choose an Algorithm</h1>}
                </div>
            </div>
        </div>
    );
};

const ComponentRenderer = ({ component: Component }) => {
    return <Component />;
};

export default AlgorithmsMenu;