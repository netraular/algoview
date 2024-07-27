import React, { useState, useEffect } from 'react';
import { Head, usePage, router } from '@inertiajs/react';
import Sidebar from '../../Components/Sidebar';
import BubbleSort from './BarSort/BubbleSort';
import QuickSort from './BarSort/QuickSort';
import MergeSort from './BarSort/MergeSort';

const AlgorithmsMenu = () => {
    const algorithms = [
        { type: 'BarSort', name: 'BubbleSort', component: BubbleSort },
        { type: 'BarSort', name: 'QuickSort', component: QuickSort },
        { type: 'BarSort', name: 'MergeSort', component: MergeSort },
        // Agrega más algoritmos aquí con su tipo y componente correspondiente
    ];

    const { selectedAlgorithm } = usePage().props;
    const [currentAlgorithm, setCurrentAlgorithm] = useState(null);

    useEffect(() => {
        if (selectedAlgorithm) {
            const algorithm = algorithms.find(algo => algo.name === selectedAlgorithm);
            if (algorithm) {
                setCurrentAlgorithm(() => algorithm.component);
            }
        }
    }, [selectedAlgorithm]);

    const handleSelectAlgorithm = (algorithm) => {
        router.visit(`/algorithms/BarSort/${algorithm.name}`, {
            method: 'get',
            only: ['selectedAlgorithm'],
        });
    };

    return (
        <div className="d-flex">
            <Head title="Algorithms Menu" />
            <Sidebar algorithms={algorithms} onSelectAlgorithm={handleSelectAlgorithm} />
            <div className="flex-grow-1 p-3">
                {currentAlgorithm ? <ComponentRenderer component={currentAlgorithm} /> : <h1>Choose an Algorithm</h1>}
            </div>
        </div>
    );
};

const ComponentRenderer = ({ component: Component }) => {
    return <Component />;
};

export default AlgorithmsMenu;