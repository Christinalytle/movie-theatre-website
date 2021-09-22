import React, {useState} from 'react'


function Counter() {
    const initialCount = 0; 

    const [count, setCount] = useState(initialCount); 

    const incrementFive = () => {
        setCount(prevCount => prevCount + 5)
    }

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(initialCount)}>Reset {count}</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase {count} by 1</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decreae {count} by 1</button>
            <button onClick={incrementFive}>Add 5 to {count}</button>
        </div>
    )
}

export default Counter; 