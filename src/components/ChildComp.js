import { Component } from "react";
import "./external.css"
class ChildComp extends Component {
    render() {
        const{name,salary}=this.props
        return (
            <>
                <h1 >child components</h1>
                <div className="txt">name: {name}</div>
                <div className="txt1">salary: {salary}</div>
                <button className="but1" onClick={()=>this.props.update()}>increment</button>

            </>
        )
    }
}

export default ChildComp;