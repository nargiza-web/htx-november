import React, { Component } from "react";

class TaskList extends Component {
    render() {

        let taskItems = this.props.tasks.map(task => {
        return <div>{task}</div>
        })

        return <h1>{taskItems}</h1>
    }
}

export default TaskList