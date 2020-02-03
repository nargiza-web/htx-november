import React from 'react'
import { connect } from 'react-redux'

function FancyCounter(props) {
    return (
        <div>
            <h1>FancyCounter</h1>
            <h3>{props.counter} </h3>
            <h2>{props.user}</h2>
            <button onClick= {() => props.onIncrementFancyCounter()}>Increment</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter, 
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementFancyCounter: () => dispatch({type: 'INCREMENT_COUNTER'})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FancyCounter)