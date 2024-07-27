// resources/js/Pages/BubbleSort.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link, Head, router } from '@inertiajs/react';
import BubbleSortCpp from './BubbleSortCpp';

const BubbleSort = () => {
    const	[data, setData] = useState([]);
    const   [inputValue, setInputValue] = useState(0);
    const   [columns, setColumns] = useState([500, 300, 400, 200, 50, 100]);
    const	[step, setStep] = useState(-1);
    const   [mode, setMode] = useState(0);
    const   [path, setPath] = useState("A");
    
    // POST, DEPENDIENDO DE SI ESTAMOS EN C++ O EN PYTHON HAY QUE CAMBIAR EL PATH Y EL MODE
    const	sort = () => {
		router.post('/algorithms/BarSort/BubbleSort', { columns, path, mode }, {
            onSuccess: (page) => {
                // console.log(page.props);
				setStep(1);
				setData(page.props.data);
            }
        });
	};

    const   handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const   handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue !== '' && !columns.includes(Number(inputValue)) && Number(inputValue) > 0 && inputValue[0] !== '0') {
            setColumns([...columns, Number(inputValue)]);
        }
    };

    const   handleDelete = (index) => {
        const   newColumns = columns.filter((_, i) => i !== index);
        setColumns(newColumns);
    };

    const   handleRandomize = () => {
        const   random = [...columns];
        for (let i = random.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [random[i], random[j]] = [random[j], random[i]];
        }
        setColumns(random);
    };
    return (
        <div>
            <h1>BubbleSort Visualization</h1>
            <div className="btn-group" role="group" aria-label="Programming language">
                <button onClick={() => (setMode(1), setPath("resources/scripts/c++/Bubble_sort/bubble"))} type="button" className="btn btn-secondary">C++</button>
                <button onClick={() => (setMode(2), setPath("resources/scripts/python/sort/bubble sort/bubble_sort.py"))} type="button" className="btn btn-secondary">Python</button>
            </div>
            {/* SHOWING C++ WINDOW WHEN MODE IS SET TO 1 */}
            {mode === 1 && <BubbleSortCpp data={data} columns={columns} step={step}/>}
            {/* SHOWING PYTHON WINDOW WHEN MODE IS SET TO 2. FALTA AGREGAR EL COMPONENTE DE PYTHON DONDE ESTA EL H1.
            DATA ES EL ARRAY DE TODOS LOS PASOS, COLUMNS ES EL ARRAY DE NUMEROS, STEP ES EL PASO EN EL QUE ESTAMOS DEL ARRAY DE DATA */}
            {mode === 2 && <h1>PYTHON CODE AQUI</h1>}
            {/* SHOWING BUTTONS ONLY IF MODE IS SET TO SOMETHING */}
            {mode > 0 && (
                <>
                    <button onClick={sort}>SORT</button>
                    <form onSubmit={handleFormSubmit}>
                        <input type="number" max={500} min={0} value={inputValue} onChange={handleInputChange}/>
                    </form>
                    <ul>
                        {columns.map((column, index) => (
                            <li key={index}>
                                {column}
                                <button onClick={() => handleDelete(index)}>x</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleRandomize}>Randomize</button>\
                </>
            )}
        </div>
    );
};

export default BubbleSort;