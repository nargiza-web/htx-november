import React, { Component } from 'react';
import logo from './logo.svg';
import Stepper from './Stepper'
import './App.css';
import Counter from './components/Counter'
import DisplayCounter from './components/DisplayCounter';

class App extends Component {

  constructor(props) {
    console.log("constructor")
    super(props)
    this.state = {
      ctr: 0 
    }
  }

  componentDidMount() {
    
    

  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  handleIncrement = (counter) => {

    this.setState({
      ctr: counter 
    })

  }

  render() {
    console.log("render")
    return <div>
     <Counter name = "Alex" onIncrement = {this.handleIncrement} />
     <DisplayCounter counter = {this.state.ctr} />
      </div>
  }
}

export default App;
