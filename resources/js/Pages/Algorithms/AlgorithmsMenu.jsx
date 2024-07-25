// resources/js/Pages/AlgorithmsMenu.jsx

import React, { useState, useRef, useEffect } from 'react';
import { Link, Head, router } from '@inertiajs/react';


const AlgorithmsMenu = () => {
    const algorithms = ['BubbleSort', 'QuickSort', 'MergeSort'];

    return (
        <div>
            <h1>Choose an Algorithm</h1>
            <ul>
                {algorithms.map((algorithm, index) => (
                    <li key={index}>
                        <Link href={`/algorithms/${algorithm}`}>{algorithm}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlgorithmsMenu;