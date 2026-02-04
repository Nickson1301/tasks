import { Component } from "react";

class MethodEvent extends Component{

    constructor(){
    super();
    this.state={
        name:"Nickson",
        salary:20000
    };
    }
    greet=()=>{
        window.alert("good morning guys")
    }

    welcome=(...std)=>{
        window.alert(`welcome you ${std} to react`)
    }

    updatesal=()=>{
        this.setState((prevState)=>({name:"Rojar Nickson",salary:prevState.salary+2000}))
    }
    render(){
        return(
            <>
              <h2>Method event component</h2>
              <button onClick={this.greet}>Greet</button>
              <button onClick={()=>this.greet()}>Greet1</button>
              <button onClick={()=>this.welcome("Rojar","Nickson")}>welcome</button>
              <button onMouseOver={()=>this.welcome("Girish","Kumar")}>Mouse over</button>
              <button onClick={()=>this.updatesal()}>increment</button>
              <p>{this.state.name},{this.state.salary}</p>
            </>
        )
    }
}

export default MethodEvent;