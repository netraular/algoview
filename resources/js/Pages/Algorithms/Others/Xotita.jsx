// resources/js/Pages/Xotita.jsx

import React, { useState, useRef, useEffect } from 'react';
import { Link, Head, router } from '@inertiajs/react';

const Xotita = ({ result: initialResult }) => {
    const canvasRef = useRef(null);
    const [columns, setColumns] = useState([1000, 200, 150, 300, 250]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        // drawColumns(context, columns);
    }, [columns]);

    const drawColumns = (context, columns) => {
        const   canvasWidth = context.canvas.width;
        const   canvasHeight = context.canvas.height;
        const   columnWidth = canvasWidth / columns.length;

        context.clearRect(0, 0, canvasWidth, canvasHeight);

        columns.forEach((column, index) => {
            const x = index * columnWidth;
            const y = canvasHeight - column;
            context.fillStyle = 'blue';
            context.fillRect(x, y, columnWidth - 2, column);
        });
    };

    // BOTON SWAP

    const swapFirst = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        [columns[0], columns[1]] = [columns[1], columns[0]];
        drawColumns(context, columns);
    };

    // CODIGO ANTIGUO
    const [MultiplyNumber, setNumberMultiply] = useState('');
    const [SumNumber, setNumberSum] = useState('');

    const [multiplyResult, setMultiplyResult] = useState(null);
    const [sumResult, setSumResult] = useState(null);
    
    const handleMultiplyInputChange = (e) => {
        setNumberMultiply(e.target.value);
    };

    const handleSumInputChange = (e) => {
        setNumberSum(e.target.value);
    };
    const handleSubmitProcessNumber = (e) => {
        e.preventDefault();
        router.post('/process-number', { number: MultiplyNumber }, {
            onSuccess: (page) => {
                setMultiplyResult(page.props.result);
            }
        });
    };

    const handleSubmitSumNumber = (e) => {
        e.preventDefault();
        router.post('/sum-number', { number: SumNumber }, {
            onSuccess: (page) => {
                setSumResult(page.props.result);
            }
        });
    };

    return (
        <div>
            <Head title="Welcome" />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, marginRight: '10px' }}>
                    <h1>Multiply by 2:</h1>
                    <form onSubmit={handleSubmitProcessNumber}>
                        <input
                            type="number"
                            value={MultiplyNumber}
                            onChange={handleMultiplyInputChange}
                            placeholder="Enter a number"
                        />
                        <button type="submit">Submit</button>
                    </form>
                    {multiplyResult !== null && (
                        <div>
                            <h2>Result: {multiplyResult}</h2>
                        </div>
                    )}
                </div>
                <div style={{ flex: 1, marginLeft: '10px' }}>
                    <h1>Add +1:</h1>
                    <form onSubmit={handleSubmitSumNumber}>
                        <input
                            type="number"
                            value={SumNumber}
                            onChange={handleSumInputChange}
                            placeholder="Enter a number"
                        />
                        <button type="submit">Submit</button>
                    </form>
                    {sumResult !== null && (
                        <div>
                            <h2>Result: {sumResult}</h2>
                        </div>
                    )}
                </div>
            </div>
            <br />
            <canvas ref={canvasRef} width={500} height={500} style={{ border: '1px solid black' }}></canvas>
            <button onClick={swapFirst}>SWAP</button>
        </div>
    );
};

export default Xotita;
