import React, { Component } from 'react';
import InputTask from './InputTask'
import './App.css';
import TaskList from './TaskList';

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      tasks: [] 
    }
  }

  handleTaskSave = (name, priority) => {

    const task = {name: name, priority: priority}

    // if you had your own class 
    //const task = new Task(name, priority)

    //console.log(name, priority)
    // insert name and priorty of a task into array 
    this.setState({
      tasks: this.state.tasks.concat(task)
    })
  }
  
  render() {
    return (
    <div>
      <InputTask onTaskSave = {this.handleTaskSave} />
      <TaskList tasks = {this.state.tasks} />
    </div>
    )
  }
}

export default App;
