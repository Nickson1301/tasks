import { Component } from "react";


class StateComp extends Component{

    constructor(){
    super();
    this.state={
        ename:"Nickson",
        esalary:20000
    };
    setTimeout(()=>{
        //this.setState({ename:"Rojar Nickson",esalary:this.state.esalary+2000});
        this.setState((prevState)=>({ename:"Rojar Nickson",esalary:prevState.esalary+2000}))
    },5000)
}
    render(){
        return(
            <>
              <h5>My name{this.state.ename} and salary is{this.state.esalary}</h5>
            </>
        )
    }
};

export default StateComp;