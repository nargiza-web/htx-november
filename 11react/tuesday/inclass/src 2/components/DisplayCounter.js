import React, { Component } from "react";

class DisplayCounter extends Component {

    render() {
        return (
        <h1>{this.props.counter}</h1>        
        )
    }
}

export default DisplayCounter