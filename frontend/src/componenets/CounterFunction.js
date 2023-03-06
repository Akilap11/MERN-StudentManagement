import React,{ useState } from "react";

//dont have render in functions
//dont have constructors in functions
//so we have react hooks(to define the state in a function)
//dont have to bind ;) 
//so functional is more easy
//import above {useState}
function CounterFunction(){

    let [number,setNumberr]=useState(0)

    function increment(){
        setNumberr(++number)
    }

    return(
        <div>
            <h3>Functional componenet</h3>
            <h1> Counter={number}</h1>
            <button onClick={e=> increment()}> Increment </button>
        </div>
    )
}

export default CounterFunction;