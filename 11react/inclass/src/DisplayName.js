import React,{ Component } from "react";


class DisplayName extends Component {
    render() {
        return <h1>Hello {this.props.name}, age is {this.props.age}</h1>
    }
}

export default DisplayName