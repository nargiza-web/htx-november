import React from 'react';
import { connect } from 'react-redux'
//import * as actionCreators from '../store/actions/actionCreators'
import { incrementCounter } from '../store/actions/actionCreators'

// functional react components
const Counter = props => {

    return (
      <div>
        <h1>{props.ctr}</h1>
        <button onClick={props.onIncrement}>Increment</button>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(incrementCounter())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
