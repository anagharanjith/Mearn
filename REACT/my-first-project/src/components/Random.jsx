import React, { Component } from 'react'

export default class Random extends Component {
  constructor(){
    super()
    this.state = {car:"swift"}
  }
  handleChange=()=>{
    this.setState({car:"polo"})
  }
  render() {
    return (
      <div>
        <h1>Random</h1>
        <h4>Car Name: {this.state.car}</h4>
        <button onClick={this.handleChange} className="btn btn-warning">Change Car</button>
      </div>
      
    )
  }
}
                          