import React, { Component } from 'react'

import HOCComp from './HOCComp';

class ClickCounterComp extends Component {
    //constructor(props) {
      //super(props)
    
      //this.state = {
        //count:0
         
      //}
    //}

    //updateState=()=>{
     //   this.setState((prevState)=>({count:prevState.count+1}));
    //}
    
  render() {
    return (
      <div>
        <h2>This is Click Counter Component</h2>
        <p>Counter: <strong>{this.props.count}</strong></p>
        <button type='button' onClick={()=>this.props.updateState()}>Click Counter</button>
        
      </div>
    )
  }
}

export default HOCComp(ClickCounterComp)