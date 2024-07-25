// resources/js/Pages/SortPage.jsx

import React, { useState, useEffect } from 'react';
import { usePage, router } from '@inertiajs/react';

const SortPage = () => {
    const { props } = usePage();
    const initialData = props.data || [];
    const initialSortedData = props.sortedData || [];
    const initialSteps = props.steps || [];
    const initialComparisons = props.comparisons || [];

    const [data, setData] = useState(initialData);
    const [sortedData, setSortedData] = useState(initialSortedData);
    const [steps, setSteps] = useState(initialSteps);
    const [comparisons, setComparisons] = useState(initialComparisons);
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        if (steps.length > 0 && currentStep < steps.length) {
            const timeout = setTimeout(() => {
                setSortedData(steps[currentStep].map(index => data[index]));
                setCurrentStep(currentStep + 1);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [steps, currentStep, data]);

    const generateRandomData = () => {
        const randomData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
        setData(randomData);
        setSortedData([]);
        setSteps([]);
        setComparisons([]);
        setCurrentStep(0);
    };

    const sortData = () => {
        router.post('/sort', { data }, {
            onSuccess: (page) => {
                setSortedData(page.props.sortedData.map(index => data[index]));
                setSteps(page.props.steps);
                setComparisons(page.props.comparisons);
                setCurrentStep(0);
            }
        });
    };

    const renderBars = (array) => {
        return array.map((value, index) => {
            const isCompared = comparisons[currentStep - 1]?.some(comp => comp[0] === index || comp[1] === index);
            return (
                <div
                    key={index}
                    style={{
                        height: value * 3,
                        backgroundColor: isCompared ? 'red' : 'blue',
                        margin: '0 2px',
                        width: '20px',
                        display: 'inline-block'
                    }}
                ></div>
            );
        });
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