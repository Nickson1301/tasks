import { PureComponent } from "react";

class MyPureComp extends PureComponent{
    render(){
        console.log("the pure component")
        return(
            <>
            <h1>this is pure components</h1>

            </>
        )
    }
}

export default MyPureComp;