import React, { Component } from 'react'

export default class EVENT_HANDER_CLASS extends Component { 
  constructor(props) {
    super(props)
  
    this.state = {
       inputvalue:""
    }
  }
  
  handleChange=(e)=>
  {
    this.setState({inputvalue:e.target.value})
  }
  render() {
    return (
      <div>
         <input type="text"  onChange={this.handleChange}/>  
         <h1>{this.state.inputvalue}</h1>
         
      </div>
    )
  }
}
