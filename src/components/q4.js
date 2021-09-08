import React from "react";

export default class Q4 extends React.Component{
    constructor(){
        super()
        this.state={
            input:'',
            color:'black'
        }
    }
    input = (event) =>{
        this.setState({
            input:event.target.value
        })
    }
    red = () =>{
        this.setState({
            color:'red'
        })
    }
    green = () =>{
        this.setState({
            color:'green'
        })
    }
    blue = () =>{
        this.setState({
            color:'blue'
        })
    }
    render(){
        return(
            <>
            <p>Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.</p>
            <input type='text' onChange={this.input} />
            <button onClick={this.red}>Red</button>
            <button onClick={this.green}>Green</button>
            <button onClick={this.blue}>Blue</button>
            <p style={{color:this.state.color}}>{this.state.input}</p>
            </>
        )
    }
}