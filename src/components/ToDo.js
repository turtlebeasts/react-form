import axios from "axios"
import React from "react"

export default class Todo extends React.Component{
    constructor(){
      super()
      this.state = {
        name:"",
        loading:false,
        replied:false,
        activity:""
      }
    }
    inputHandler = (event) =>{
      this.setState({
       name:event.target.value,
      })
    }
    check = () =>{
      this.setState({
        loading:true
      })
      axios.get('https://www.boredapi.com/api/activity')
      .then(res => {
        this.setState({
          activity:res.data.activity,
          loading:false,
          replied:true
        })
      })
    }
    reload = () =>{
      this.setState({
        name:"",
        activity:"",
        replied:false,
        loading:false
      })
    }
     render(){
       return(
         <>
         <h1>What should you do now?</h1>
         <input type='text' onChange={this.inputHandler} onClick={this.reload} value={this.state.name} placeholder='Your name?'/><br/>
         <button onClick={this.check}>Check</button><br/>
         {this.state.loading?"Loading...":""}
         {this.state.replied?this.state.name+" "+this.state.activity+" now":""}
         </>
       )
     }
   }