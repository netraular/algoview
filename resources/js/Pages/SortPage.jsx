// resources/js/Pages/SortPage.jsx

import React, { useState, useEffect } from 'react';
import {  usePage, router } from '@inertiajs/react';

const SortPage = () => {
    const { props } = usePage();
    const initialData = props.data || [];
    const initialSortedData = props.sortedData || [];
    const initialSteps = props.steps || [];

    const [data, setData] = useState(initialData);
    const [sortedData, setSortedData] = useState(initialSortedData);
    const [steps, setSteps] = useState(initialSteps);
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        if (steps.length > 0 && currentStep < steps.length) {
            const timeout = setTimeout(() => {
                setData(steps[currentStep]);
                setCurrentStep(currentStep + 1);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [steps, currentStep]);

    const generateRandomData = () => {
        const randomData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
        setData(randomData);
        setSortedData([]);
        setSteps([]);
        setCurrentStep(0);
    };

    const sortData = () => {
        router.post('/sort', { data }, {
            onSuccess: (page) => {
                setSortedData(page.props.sortedData);
                setSteps(page.props.steps);
                setCurrentStep(0);
            }
        });
    };

    const renderBars = (array) => {
        return array.map((value, index) => (
            <div key={index} style={{ height: value * 3, backgroundColor: 'blue', margin: '0 2px', width: '20px', display: 'inline-block' }}></div>
        ));
    };

    return (
        <div className="container">
            <h1>Bubble Sort con Python</h1>
            <button onClick={generateRandomData} className="btn btn-primary">Generar Datos Aleatorios</button>
            <button onClick={sortData} className="btn btn-success">Ordenar Datos</button>
            <div>
                <h2>Datos Originales</h2>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '200px' }}>
                    {renderBars(data)}
                </div>
            </div>
            <div>
                <h2>Datos Ordenados</h2>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '200px' }}>
                    {renderBars(sortedData)}
                </div>
            </div>
        </div>
    );
};

export default SortPage;
