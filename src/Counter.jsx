import React, {useState} from "react";
function Counter(){
const [count, setCount] = useState(0);

const increment = () =>{
    setCount(c => c + 1);
}
{/* We can also make use of updater fucnitons here in order to future proof our code in case we want to establish some changes */}
const decrement = () => {
    setCount(c => c - 1);
}
const reset = () => {
    setCount(0);
}

return (
<div className = "counter-container">
    <p className = "count-display">{count}</p>
    <button className = "counter-button" onClick={increment}>Increment</button>
    <button className = "counter-button" onClick={reset}>Reset</button>
    <button className = "counter-button" onClick={decrement}>Decrement</button>
    </div>
);
}
export default Counter 