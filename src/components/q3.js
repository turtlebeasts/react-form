import React from "react";

export default class Q3 extends React.Component{
    constructor(){
        super()
        this.state = {
            type:'h3'
        }
    }
    h1 = () =>{
        this.setState({
            type:'h1'
        })
    }
    h2 = () =>{
        this.setState({
            type:'h2'
        })
    }
    h3 = () =>{
        this.setState({
            type:'h3'
        })
    }
    
    render(){
        return(
            <>
            <p>Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.</p>
            <button onClick={this.h1}>h1</button>
            <button onClick={this.h2}>h2</button>
            <button onClick={this.h3}>h3</button>
            <this.state.type>Hello</this.state.type>
            </>
            
        )
    }
}