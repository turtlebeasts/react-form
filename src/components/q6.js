import React from "react";

export default class Q6 extends React.Component{
    constructor(){
        super()
        this.state = {
            loading:true
        }
    }
    loaded = () =>{
        this.setState({
            loading:false
        })
    }
    render(){
        return(
            <>
            {this.state.loading?"Loading...":""}<br/>
            <button onClick={this.loaded}>Loaded</button>
            </>
        )
    }
}