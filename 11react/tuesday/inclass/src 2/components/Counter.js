import React, { Component } from "react";

class Counter extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            ctr: 0
        }
    }

    handleIncrement = () => {

        this.setState({
            ctr: this.state.ctr + 1 
        },() => {
            this.props.onIncrement(this.state.ctr)
        })
       
    }

    render() {
        return (
            <button onClick={this.handleIncrement}>INCREMENT</button>        
        )
    }
}

export default Counter