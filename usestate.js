import React,{ useState } from 'react';
function Counter(){
    Const[Counter,setCount]=useState(0);
    function increment()
    {
        setCount(Count+1);
    };
    const decrement=()=>{
        setCount(count-1);
    }
    return(
        <div>
        <p Count={count}></p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
    );
}