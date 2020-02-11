import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import * as actionCreators from './store/creators/actionCreators'
import NavigationItems from './NavigationItems'

function App(props) {
  return (
    <h1>
      <NavigationItems isAuthenticated = {false}/>
    </h1>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMovies: () => dispatch(actionCreators.loadMovies())
  }
}
export default connect(null, mapDispatchToProps)(App);
