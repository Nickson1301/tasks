import { Component } from "react";
import "./external.css"
import constdata from "../shared/constant/constantfile";
class ChildComp extends Component {
    render() {
        const { name, salary } = this.props
        return (
            <>
                <h1 >child components</h1>
                <div className="txt">name: {name}</div>
                <div className="txt1">salary: {salary}</div>
                <button className="but1" onClick={() => this.props.update()}>increment</button>
                <img src={constdata.fish1} alt="img" className="imgs"></img>
                <img src={constdata.goldfish} alt="img" className="imgs"></img>
                <img src={constdata.fighter} alt="img" className="imgs"></img>
                <img src={constdata.fish2} alt="img" className="imgs"></img>



            </>
        )
    }
}

export default ChildComp;