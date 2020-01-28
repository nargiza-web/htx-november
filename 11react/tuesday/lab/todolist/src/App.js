import React, {Component} from 'react';
import Display from './Display'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      taskName: '',
      tasks: []
    }
  }
  
  handleChange = (e) =>{
    // console.log(e.target.value)
    this.setState({
      taskName:e.target.value
    })
  }
  
  handleClick = () => {
    
    this.setState({
      tasks: this.state.tasks.concat(this.state.taskName)
    })
  }
  
  render(){
    return(
      <div>
        <input type="text" onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Add Task</button>
        <Display tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default App;
