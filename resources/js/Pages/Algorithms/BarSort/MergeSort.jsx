import React, { useState } from 'react';
import { usePage, router } from '@inertiajs/react';

const MergeSort = () => {
    const { sortedColumns: initialColumns } = usePage().props;
    const [columns, setColumns] = useState(initialColumns || [500, 300, 400, 200, 50, 100]);

    const sort = () => {
        router.post('/algorithms/BarSort/MergeSort', { columns }, {
            onSuccess: (page) => {
                setColumns(page.props.sortedColumns);
            }
        });
    };

    return (
        <div>
            <h1>MergeSort Algorithm</h1>
            <ul>
                {columns.map((column, index) => (
                    <li key={index}>
                        {column}
                    </li>
                ))}
            </ul>
            <button onClick={sort}>SORT</button>
        </div>
    );
};

export default MergeSort;