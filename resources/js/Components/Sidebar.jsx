// resources/js/Components/Sidebar.jsx

import React from 'react';

const Sidebar = ({ algorithms, onSelectAlgorithm }) => {
    return (
        <div className="bg-light p-3" style={{ width: '250px', minHeight: '100vh' }}>
            <h4>Algorithms</h4>
            <ul className="list-group">
                {algorithms.map((algorithm, index) => (
                    <li key={index} className="list-group-item" onClick={() => onSelectAlgorithm(algorithm)}>
                        {algorithm.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;