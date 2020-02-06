import React, {Component} from 'react';
import { connect } from 'react-redux'

class TodoList extends Component {

  constructor() {
    super()

    this.state = {
      taskName: ''
    }
  }


  handleAddTaskClick = () => {
    this.props.onTaskAdded(this.state.taskName)
  }

  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <input type="text" name="taskName" onChange={this.handleTextBoxChange} />
        <button onClick={this.handleAddTaskClick}>Add Task</button>

        {this.props.tasks}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tsk.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskAdded: (taskName) => dispatch({type: 'ADD_NEW_TASK',task: taskName})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
