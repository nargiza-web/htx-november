import React, { Component } from 'react';

class InputTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            taskName: '', 
            taskPriority: '' 
        }

    }

    handleChange= (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleAddTask = () => {
        // callback function in App.js 
        this.props.onTaskSave(this.state.taskName, this.state.taskPriority) 
    }

    render() {
        return (
            <div>
            <input name="taskName" placeholder="Title" onChange={this.handleChange} type="text"></input>
            <input name="taskPriority" onChange={this.handleChange} type="text" placeholder="Priority" />
            <button onClick={this.handleAddTask}>Add</button>
            </div>
        )
    }
}
export default InputTask