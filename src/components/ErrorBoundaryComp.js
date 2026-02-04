import React, { Component } from 'react'

export class ErrorBoundaryComp extends Component {
    constructor(props){
        super(props)

        this.state={
            isCond:false
        }
    }
    static getDerivedStateFromError(){
        return{
            isCond:true
        }
    }

    componentDidCatch(error){
        console.log(error);
    }

  render() {
    if(this.state.isCond){
        return <strong> Not a User</strong>
    }
    return this.props.children;
    
  }
}

export default ErrorBoundaryComp
