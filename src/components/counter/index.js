import React,{useState} from "react";

const Counter=()=>{
    const [count, setCount] = useState(0);
    return(<div data-test="counter-wrapper">
        <h1>Counter display <span data-test="counter-display">{count}</span> </h1>
        <button data-test="incre-btn" onClick={()=>setCount(preState=>preState+1)}>Increment Button</button>
    </div>);
}
export default Counter;