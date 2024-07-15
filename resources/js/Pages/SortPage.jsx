// resources/js/Pages/SortPage.jsx

import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import { usePage } from '@inertiajs/inertia-react';

const SortPage = () => {
    const { props } = usePage();
    const initialData = props.data || [];
    const initialSortedData = props.sortedData || [];

    const [data, setData] = useState(initialData);
    const [sortedData, setSortedData] = useState(initialSortedData);

    const generateRandomData = () => {
        const randomData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
        setData(randomData);
    };

    const sortData = () => {
        router.post('/sort', { data });
    };

    return (
        <div className="container">
            <h1>Bubble Sort con Python</h1>
            <button onClick={generateRandomData} className="btn btn-primary">Generar Datos Aleatorios</button>
            <button onClick={sortData} className="btn btn-success">Ordenar Datos</button>
            <div>
                <h2>Datos Originales</h2>
                <p>{data.join(', ')}</p>
            </div>
            <div>
                <h2>Datos Ordenados</h2>
                <p>{sortedData.join(', ')}</p>
            </div>
        </div>
    );
};

export default SortPage;
