import React from "react";
import constdata from "../shared/constant/constantfile";
const MyImagesComp = () => {
    return(
        <div>
        <h2>This is my Images Component</h2>
        <img src={constdata.fighter} alt='Batman' height='400px' width='500px'/>
        <img src={constdata.fish1} alt='Spiderman' height='400px' width='500px'/>

        </div>

     )
    
}

export default MyImagesComp;