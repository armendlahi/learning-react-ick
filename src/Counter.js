import React, { useEffect } from 'react';

const Counter = ({ max }) => {
    // componentWillUnmount
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Interval");
        }, 1000);
        // console.log('Counter mounted');

        // Component will unmount
        // Cleanup function
        return () => {
            clearInterval(interval);
        };
    }, []);

    return <p>I will dissapear when the counter reaches {max}</p>
};

export default Counter;