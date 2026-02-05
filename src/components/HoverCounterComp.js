import React, { Component } from 'react'

export class HoverCounterComp extends Component {
    //constructor(props) {
    //  super(props)
    
    //  this.state = {
    //    count:0
         
      //}
    //}

    //updateState=()=>{
     //   this.setState((prevState)=>({count:prevState.count+1}));
    //}
    
  render() {
    return (
      <div>
        <h2>This is Hover Counter Component</h2>
        <p>Counter: <strong>{this.props.count}</strong></p>
        <h2 onMouseOver={()=>this.props.updateState()}>Hover Mouse on me to increment</h2>
        
      </div>
    )
  }
}
