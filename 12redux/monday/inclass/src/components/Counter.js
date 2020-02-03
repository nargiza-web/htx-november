import React from 'react'
import { connect } from 'react-redux'

function Counter(props) {
    return (
        <div>
            <h1>Counter</h1>
            <h3>{props.ctr}</h3>
            <button onClick = {() => props.onIncrement()}>Increment</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter  
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT_COUNTER', value: 123})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter) 