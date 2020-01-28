import React, {Component} from 'react'
import './Stepper.css';

class Stepper extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increaseCount = () => {
        console.log("Count increased")
       
        // setState will fire render automatically 
        this.setState({
            count: this.state.count + 1
        },() => {
            console.log("State has been updated")
            console.log(this.state.count)
        })  

        console.log(this.state.count)
        
    }



    render() {
        return (
        <div className="stepper">
            <button>-</button>
        <h2>{this.state.count}</h2>
            <button onClick={this.increaseCount}>+</button>
        </div>)
    }
}

export default Stepper