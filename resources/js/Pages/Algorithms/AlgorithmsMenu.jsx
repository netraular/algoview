// resources/js/Pages/AlgorithmsMenu.jsx

import React, { useState, useRef, useEffect } from 'react';
import { Link, Head, router } from '@inertiajs/react';

const AlgorithmsMenu = () => {
    const algorithms = [
        { type: 'BarSort', name: 'BubbleSort' },
        { type: 'BarSort', name: 'QuickSort' },
        { type: 'BarSort', name: 'MergeSort' },
        // Agrega más algoritmos aquí con su tipo correspondiente
    ];

    return (
        <div>
            <h1>Choose an Algorithm</h1>
            <ul>
                {algorithms.map((algorithm, index) => (
                    <li key={index}>
                        <Link href={`/algorithms/${algorithm.type}/${algorithm.name}`}>{algorithm.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlgorithmsMenu;