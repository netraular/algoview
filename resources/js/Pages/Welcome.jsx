// resources/js/Pages/Welcome.jsx

import React, { useState } from 'react';
import { Link, Head, router } from '@inertiajs/react';

const Welcome = ({ result: initialResult }) => {
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
        </div>
    );
};

export default Welcome;
