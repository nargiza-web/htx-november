import React, { Component } from "react";
import { ThemeContext } from './theme-context'

class ThemeButton extends Component {

    static contextType = ThemeContext

    render() {
        return <h1>ThemeButton - {this.context}</h1>
    }
}

export default ThemeButton 