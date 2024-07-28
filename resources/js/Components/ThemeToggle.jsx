// resources/js/Components/ThemeToggle.jsx

import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.classList.remove('bg-light', 'bg-dark');
        document.body.classList.add(theme === 'dark' ? 'bg-dark' : 'bg-light');
        document.body.classList.add(theme === 'dark' ? 'text-light' : 'text-dark');
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button className="btn btn-outline-primary rounded-circle" style={{ width: '30px', height: '30px', padding: '0' }} onClick={toggleTheme}>
            {theme === 'light' ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-sun-fill"></i>}
        </button>
    );
};

export default ThemeToggle;