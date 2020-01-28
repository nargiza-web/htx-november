import React,{ Component } from "react";

class Counter extends Component {

    constructor(props) {
        super(props)// base class / parent class 
        console.log(this)

        // LOCAL STATE // This state is JUST for the Counter component 
        this.state = {
            ctr: 99
        }

        //this.ctr = 0
        
        // binding the value of this which is Counter to the handle increment function 
       // this.handleIncrement = this.handleIncrement.bind(this)


    }

    // ARROW FUNCTIONS already know to use this which refers to the class
    handleIncrement = () => {
         // this.setState is going to call render automatically
         this.setState({
            ctr: this.state.ctr + 1
        })
    }

    /*
    handleIncrement() {
        console.log(this)
        //this.ctr += 1 
        console.log("handle increment")
        // update the state // update the counter 
        // this.state.ctr += 1  // DONT DO THIS
        
        // this.setState is going to call render automatically
        this.setState({
            ctr: this.state.ctr + 1
        })


        //console.log(this.ctr)
    } */

    render() {

       return <div>
            <h1 className="my-counter">{this.state.ctr}</h1>
            <button onClick={this.handleIncrement}>INCREMENT</button>
        </div>
    }

}

export default Counter 