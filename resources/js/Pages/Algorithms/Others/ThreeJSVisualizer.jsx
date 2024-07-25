// resources/js/Pages/ThreeJSVisualizer.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJSVisualizer = ({ columns, step, data }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }

        const width = canvas.width;
        const height = canvas.height;

        // Setup Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setSize(width, height);

        // Create bars
        const barWidth = 5.0;
        const barSpacing = 0.1;
        const bars = [];

        columns.forEach((columnHeight, index) => {
            const geometry = new THREE.BoxGeometry(barWidth, columnHeight, barWidth);
            const material = new THREE.MeshBasicMaterial({ color: 'blue' });
            const bar = new THREE.Mesh(geometry, material);
            bar.position.set(index * (barWidth + barSpacing) - (columns.length * (barWidth + barSpacing)) / 2, columnHeight / 2, 0);
            scene.add(bar);
            bars.push(bar);
        });

        camera.position.z = 80;

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        // Function to update visualization
        const updateVisualization = () => {
            columns.forEach((columnHeight, index) => {
                const bar = bars[index];
                bar.scale.y = columnHeight / 10;
                bar.position.y = columnHeight / 2;
            });
        };

        // Function to highlight and swap bars
        const highlightBars = (indices) => {
            bars.forEach((bar, index) => {
                bar.material.color.set(index === indices[0] || index === indices[1] ? 'red' : 'blue');
            });
        };

        const swapBars = (i, j) => {
            const tempPos = bars[i].position.x;
            bars[i].position.x = bars[j].position.x;
            bars[j].position.x = tempPos;

            const tempHeight = columns[i];
            columns[i] = columns[j];
            columns[j] = tempHeight;
        };

        // React to prop changes
        if (data.length > 0 && step < data.length - 1) {
            const timeout = setTimeout(() => {
                const [action, first, second] = data[step].split(",");
                if (action === "w") {
                    highlightBars([parseInt(first), parseInt(second)]);
                } else if (action === "s") {
                    const firstIndex = columns.indexOf(parseInt(first));
                    const secondIndex = columns.indexOf(parseInt(second));

                    if (firstIndex !== -1 && secondIndex !== -1) {
                        swapBars(firstIndex, secondIndex);
                    }
                    highlightBars([parseInt(first), parseInt(second)]);
                }
                updateVisualization();
            }, 500);
            return () => clearTimeout(timeout);
        } else {
            updateVisualization();
        }

        // Cleanup function
        return () => {
            bars.forEach(bar => scene.remove(bar));
            renderer.dispose();
        };
    }, [columns, step, data]);

    return <canvas ref={canvasRef} width={500} height={500} style={{ border: '1px solid black', display: 'block' }}></canvas>;
};

export default ThreeJSVisualizer;