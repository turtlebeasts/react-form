import React from "react";

export default class Image extends React.Component{
    
    constructor(){
        super()
        this.state={
            input:'',
            size:10
        }
    }

    input = (event) =>{
        this.setState({
            input:event.target.value
        })
    }
    increase = () =>{
        this.setState(prevState =>{
            return({
                size:prevState.size+1
            })
        })
    }
    decrease = () =>{
        this.setState(prevState =>{
            return({
                size:prevState.size-1
            })
        })
    }
    render(){
        return(
            <>
            <p>Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.</p>
            <input type='text' onChange={this.input} value={this.state.input}/>
            <button onClick={this.increase}>+</button>
            <button onClick={this.decrease}>-</button>
            <br/>
            <p style={{fontSize:this.state.size}}>{this.state.input}</p>
            </>
        )
    }
}