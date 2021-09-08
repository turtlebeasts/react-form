import React from "react";
import Image from "./components/image";
import Q3 from "./components/q3";
import Q4 from "./components/q4";
import Q5 from "./components/q5";
import Q6 from "./components/q6";
// import Bubu from "./components/bubu";

export default class App extends React.Component{
  render(){
    return(
      <div className='container'>
      <Image />
      <Q3 />
      <Q4 />
      <Q5 />
      <Q6 />
      </div>
    )
  }
}