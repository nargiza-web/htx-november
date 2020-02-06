import React from 'react';
import Todo from './components/Todo'
import './App.css';
import {connect} from 'react-redux'
import * as actionTypes from './store/types/actionTypes'

function App(props) {
  return (
    <div className="App">
      <h1>{props.ctr}</h1>
      <button onClick = {props.onIncrement}>INCREMENT</button>
      
      <Todo/>
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
    onIncrement: () => dispatch({type: actionTypes.INCREMENT})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
