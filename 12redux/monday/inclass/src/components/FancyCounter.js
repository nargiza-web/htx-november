import React from 'react'
import { connect } from 'react-redux'

function FancyCounter(props) {

    const formatUsername = () => {
        return `- ${props.username}`
    }

    return (
        <div>
            <h1>FancyCounter</h1>
    <h3>{props.counter} { props.username != '' ? formatUsername() : null } </h3>
            <button onClick= {() => props.onIncrementFancyCounter()}>Increment</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter, 
        username: state.username  
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementFancyCounter: () => dispatch({type: 'INCREMENT_COUNTER'})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FancyCounter)