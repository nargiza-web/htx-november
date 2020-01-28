import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      taskName: '', 
      tasks: [] 
    }
  }

  handleAddTask = () => {
    this.setState({
      tasks: this.state.tasks.concat(this.state.taskName)
    })
  }

  handleChange = (e) => {
    //console.log(e.target.value)
    this.setState({
      taskName: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} type="text" />
        <button onClick={this.handleAddTask}>Add</button>

        <TaskList tasks = {this.state.tasks} />
      </div>
    )
  }

}

export default App;
