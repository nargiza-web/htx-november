import React from 'react';
import './App.css';
import {useEffect} from 'react'
import {connect} from 'react-redux'
import * as actionCreators from './store/creators/actionCreators'
import NavigationItems from './NavigationItems';

// http://www.omdbapi.com/?s=batman&apikey=564727fa

function App(props) {
  useEffect(()=>{
   // props.onFetchMovies()
  },[])

  return (
    <h1>
      <NavigationItems isAuthenticated = { false } />
    </h1>
  );
}
const mapDispatchToProps = (dispatch)=>{
  return { 
    onFetchMovies: () => dispatch(actionCreators.loadMovies())
  }

}
export default connect(null,mapDispatchToProps)(App);
