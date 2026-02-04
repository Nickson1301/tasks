import { Component } from "react";
import ChildComp from "./ChildComp";
import MyPureComp from "./MyPureComp";
import MyReactMemoComp from "./MyReactMemoComp";


class ParentComp extends Component{

    constructor(){
    super();
    this.state={
        empname:"Nickson",
        empsalary:20000
    };
    }

     updatesal=()=>{
        this.setState((prevState)=>({empname:"Rojar Nickson",empsalary:prevState.empsalary+2000}))
    }
    render(){
        const{empname,empsalary}=this.state;
        console.log("parent component")
        return(
            <>
             <div>Employee name : <strong>{empname}</strong></div>
             <div>Employee name : <strong>{empsalary}</strong></div>
             <button onClick={()=>this.updatesal()}>increment</button>
             <ChildComp name={empname} salary={empsalary} update={this.updatesal}/>
             <MyPureComp ename={empname}/>
             <MyReactMemoComp/>

            </>
        )
    }
}
export default ParentComp;