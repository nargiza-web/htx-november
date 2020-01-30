import React, { Component } from "react";

class TaskList extends Component {
    render() {

        const taskItems = this.props.tasks.map(task => {
            return ( 
                <div>
                    {task.name} - {task.priority}
                </div>
            )
        })


        return (
            <div>{taskItems}</div>
        )
    }
}

export default TaskList