
import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from './store/types/actionTypes'
import * as actionCreators from './store/actions/actionCreators'

function Todo(props) {

    const [taskName,setTaskName] = useState('')

    const handleChange = (e) => {
        setTaskName(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick = {() => props.onTaskAdded(taskName)}>Add Task</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskAdded: (nameOfTask) => dispatch(actionCreators.taskAdded(nameOfTask)), 

        onCounterIncrement: () => dispatch({type: actionTypes.INCREMENT_COUNTER})
    }
}

export default connect(null, mapDispatchToProps)(Todo)

