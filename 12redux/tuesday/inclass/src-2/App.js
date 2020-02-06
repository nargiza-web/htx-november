import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Todo from './Todo';
import * as actionTypes from './store/types/actionTypes'
import * as actionCreators from './store/actions/actionCreators'

function App(props) {

  return (
    <div className="App">
      {props.ctr}

      <button onClick={() => props.onIncrement()}>Increment</button>

      <Todo />

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counterR.counter // state.reducername.propertyname
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(actionCreators.incrementCounter())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
