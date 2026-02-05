import React from "react";
import './external.css'
import constdata from "../shared/constant/constantfile";
const MyImagesComp = () => {
    return(
        <div>
        <h2>This is my Images Component</h2>
        <img src={constdata.fighter} className="imgs" alt='Batman' height='400px' width='500px'/>
        <img src={constdata.fish1} className="imgs" alt='Spiderman' height='400px' width='500px'/>

        </div>

     )
    
}

export default MyImagesComp;