import React, {Component} from 'react'
import './App.css'

class Counter extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      counter: 0
    }
  }
  
  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  
  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  
  render(){
    return (
      <div className="flexy">
        <button className="buttons" onClick = {this.handleDecrement}> - </button>
        <div className="middle"> {this.state.counter}</div>
        <button className="buttons" onClick = {this.handleIncrement}> + </button>
      </div>
    )
  }
}

export default Counter