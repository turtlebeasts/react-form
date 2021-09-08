import Navigation from "./navigation";
import React from "react";
import Middle from "./middle";

export default class Bubu extends React.Component{
    render(){
        return(
            <>
            <Navigation />
            <Middle />
            </>
        )
    }
}