import React from "react";
//const express=require("express") was like this in backend above here

class CounterClass extends React.Component{
    constructor(){
        super();
        this.increment=this.increment.bind(this)
        this.state={ //javascript object
            number:0
        }
    }

    increment(){
        this.setState({
            number:this.state.number+1
        })
    }

    render(){
        return(
            <div> 
                <hr></hr>
                <h3>ClassBase componenet</h3>
                <h1>Counter={this.state.number} </h1>
                <button onClick={this.increment} >increment</button>
                <hr></hr>
            </div>
        )
    }
}

export default CounterClass;