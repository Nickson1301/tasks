import { Component } from "react";

class ChildComp extends Component {
    render() {
        const{name,salary}=this.props
        return (
            <>
                <h1>child components</h1>
                <div>name: {name}</div>
                <div>salary: {salary}</div>
                <button onClick={()=>this.props.update()}>increment</button>

            </>
        )
    }
}

export default ChildComp;