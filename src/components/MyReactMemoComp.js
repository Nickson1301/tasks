import React from "react";
const MyReactMemoComp=()=>{
    console.log("memoo")
    return(
        <>
        <h1>this is react components</h1>
        </>
    )
 }

 export default React.memo(MyReactMemoComp);