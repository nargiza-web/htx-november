
import React from 'react'
import { connect } from 'react-redux'

function DisplayTasks(props) {

    return (
        <div>{props.tasks.map((task) => {
            return <div>{task}</div>
        })}</div>
    )

}

const mapStateToProps = (state) => {
    return {
               // state.reducername.globalstatepropertyname
        tasks: state.tasksRed.tasks
    }
}

export default connect(mapStateToProps)(DisplayTasks)