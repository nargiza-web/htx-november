import React from 'react'
import {connect} from 'react-redux'
import {useState} from 'react'

function Todo(props){
  const [task, setTask] = useState('')
  const handleChange = (e) => {
    setTask(e.target.value)
  }
  
  const theTask = props.tasks.map(task => <li>{task}</li>)
  return(
    <div>
      <h1>Your Task Page</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={()=> props.onTaskAdded(task)}>Add Task</button>
      <ul> {theTask} </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onTaskAdded: (task)=> dispatch({type: 'TASK_ADDED', value:task })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)