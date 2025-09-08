import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(10);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
        // setCount(5)
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    

    const counterStyle = {
        border: '1px solid yellow',
        padding: '10px'
    }
    return (
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce} >Reduce</button>
        </div>
    );
};

export default Counter;