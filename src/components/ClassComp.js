import { Component } from "react";

class ClassComp extends Component {
    render() {
        return (
            <>
            <h1>this is class Component</h1>
            <p>I'm {this.props.uname} and im a {this.props.upost}</p>
            </>
            
            
        )

    }
}

export default ClassComp;