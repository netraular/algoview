// resources/js/Pages/BubbleSortCpp.jsx

import React, { useState, useRef, useEffect } from 'react';
import {  usePage, router } from '@inertiajs/react';

const BubbleSortCpp = (props) => {
	const canvasRef = useRef(null);
	const	[data, setData] = useState(props.data);
    const   [columns, setColumns] = useState(props.columns);
	const	[step, setStep] = useState(props.step);

    useEffect(() => {
        setData(props.data);
        setColumns(props.columns);
        setStep(props.step);
        // console.log(step);
    }, [props.data, props.columns, props.step]);

    useEffect(() => {
        console.log(data.length);
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
		if (data.length > 0 && step < data.length - 1)
		{
            // console.log(data);
            const timeout = setTimeout(() => {
                const splited = data[step].split(",")
                if (splited[0] === "w")
                {
                    drawColumnsWatch(context, columns, [Number(splited[1]), Number(splited[2])]);
                } else if (splited[0] === "s") {
                    const first = (element) => element == Number(splited[1]);
                    const second = (element) => element == Number(splited[2]);
                    
                    const firstIndex = columns.findIndex(first);
                    const secondIndex = columns.findIndex(second);
                    
                    if (firstIndex !== -1 && secondIndex !== -1) {
                      [columns[firstIndex], columns[secondIndex]] = [columns[secondIndex], columns[firstIndex]];
                    }
                    drawColumnsWatch(context, columns, [Number(splited[1]), Number(splited[2])]);
                    // animatedSwap(firstIndex, secondIndex);
                }
                setStep(step + 1);
            }, 500);
            return () => clearTimeout(timeout);
		}
        else
            drawColumnsWatch(context, columns, []);
    }, [data, step, columns]);

    const drawColumnsWatch = (context, columns, watching) => {
        const   canvasWidth = context.canvas.width;
        const   canvasHeight = context.canvas.height;
        const   columnWidth = canvasWidth / columns.length;

        context.clearRect(0, 0, canvasWidth, canvasHeight);

        columns.forEach((column, index) => {
            const x = index * columnWidth;
            const y = canvasHeight - column;
            if (Number(column) === watching[0] || Number(column) === watching[1])
                context.fillStyle = 'red';
            else
                context.fillStyle = 'blue';
            context.fillRect(x, y, columnWidth - 2, column);
        });
    };

    // const animatedSwap = (firstIndex, secondIndex) => {
    //     const   canvas = canvasRef.current;
    //     const   context = canvas.getContext('2d');
    //     const   duration = 500;
    //     const   startTime = performance.now();
    //     const   watching = [columns[firstIndex], columns[secondIndex]];

    //     const   startPos = columns.map((column, index) => ({
    //         x: index * (canvas.width / column.length),
    //         y: canvas.height - column
    //     }));

    //     const   swappedColumns = [...columns];
    //     [swappedColumns[firstIndex], swappedColumns[secondIndex]] = [swappedColumns[secondIndex], swappedColumns[firstIndex]];

    //     const   endPos = swappedColumns.map((column, index) => ({
    //         x: index * (canvas.width / column.length),
    //         y: canvas.height - column
    //     }));

    //     const   animate = (currentTime) => {
    //         const   elapsedTime = currentTime - startTime;
    //         const   progress = Math.min(elapsedTime / duration, 1);

    //         const interpolatedPositions = startPos.map((startP, index) => {
    //             const   endP = endPos[index];
    //             const   interpolatedX = startP.x + (endP.x - startP.x) * progress;
    //             return {x: interpolatedX, y: startP.y};
    //         });

    //         context.clearRect(0, 0, canvas.width, canvas.height);
    //         interpolatedPositions.forEach((pos, index) => {
    //             const column = columns[index];
    //             context.fillStyle = column === watching[0] || column === watching[1] ? 'red' : 'blue';
    //             context.fillRect(pos.x, pos.y, canvas.width / columns.length - 2, canvas.height - pos.y);
    //         });

    //         if (progress < 1)
    //         {
    //             requestAnimationFrame(animate);
    //         } else {
    //             setColumns((prevColumns) => {
    //                 const newColumns = [...prevColumns];
    //                 [newColumns[firstIndex], newColumns[secondIndex]] = [newColumns[secondIndex], newColumns[firstIndex]];
    //                 return newColumns;
    //             });
    //         }
    //     };

    //     requestAnimationFrame(animate);
    // };

    // const	sort = () => {
	// 	router.post('/algorithms/BarSort/BubbleSort', { columns }, {
    //         onSuccess: (page) => {
    //             console.log(page.props.data);
	// 			setData(page.props.data);
	// 			setStep(1);
    //         }
    //     });
	// };

    // const   handleInputChange = (e) => {
    //     setInputValue(e.target.value);
    // }

    // const   handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     if (inputValue !== '' && !columns.includes(inputValue) && inputValue > -1) {
    //         setColumns([...columns, inputValue]);
    //         setInputValue(-1);
    //     }
    // };

    // const   handleDelete = (index) => {
    //     const   newColumns = columns.filter((_, i) => i !== index);
    //     // console.log(newColumns)
    //     setColumns(newColumns);
    // };

    // const   handleRandomize = () => {
    //     const   random = [...columns];
    //     for (let i = random.length -1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [random[i], random[j]] = [random[j], random[i]];
    //     }
    //     setColumns(random);
    // };

    return (
        <div className="container">
			<canvas ref={canvasRef} width={500} height={500} style={{ border: '1px solid black' }}></canvas>
			{/* <button onClick={sort}>SORT</button>
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
            <button onClick={handleRandomize}>Randomize</button> */}
        </div>
    );
};

export default BubbleSortCpp;