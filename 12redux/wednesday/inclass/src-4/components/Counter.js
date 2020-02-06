import React from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions/actionTypes'
import * as actionCreators from '../store/actions/actionCreators'

function Counter(props) {

    const incrementCounter = () => {
        props.onIncrementCounter()
    }

    // render using return 
    return (
      <div>
          <button onClick={() => incrementCounter()}>Increment</button>
      </div>
    );
  }

  const mapDispatchToProps = (dispatch) => {
      return {
          onIncrementCounter: () => dispatch(actionCreators.incrementCounter()), 
          onDecrementCounter: () => dispatch({type: actionTypes.DEC_COUNTER})
      }
  }

  // connect is a function that returns a function 
  export default connect(null,mapDispatchToProps)(Counter)
