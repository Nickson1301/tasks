import { useState } from "react";

const Functions=(props)=>{
    const[name,setName]=useState()
    return(
        <>
        <h2>function components</h2>
        <h4>my name {props.ename} , im a {props.epost}</h4>
        </>
    )
}

export default Functions;