import React, { Component } from "react";
import ThemeButton from "./ThemeButton";
import { ThemeContext } from './theme-context'

class Toolbar extends Component {

    static contextType = ThemeContext

    render() {
        return (
            <div><b>Toolbar</b>
            {this.context}
                <ThemeButton />
            </div>
        )
    }
}

export default Toolbar 