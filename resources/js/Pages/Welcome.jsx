// resources/js/Pages/Welcome.jsx

import React, { useState, useRef, useEffect } from 'react';
import { Link, Head, router } from '@inertiajs/react';

const Welcome = ({ result: initialResult }) => {
    

    return (
        <div>
            <h1>Welcome to Algorithm Visualization</h1>
            <Link href="/algorithms">Go to Algorithms</Link>
        </div>
    );
};

export default Welcome;
