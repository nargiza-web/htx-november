import React from 'react';
import './App.css';
import {useEffect} from 'react'
import {connect} from 'react-redux'
import * as actionCreators from './store/creators/actionCreators'

function Movies(props) {
  useEffect(()=>{
    /*
    fetch("http://www.omdbapi.com/?s=batman&apikey=664727fa")
    .then((response)=>response.json())
    .then((json)=> {
      console.log(json)
      props.onMoviesLoaded(json.Search)
    })
    */

    props.onMoviesLoaded()
 
  },[])

  return (
    <h1>Movies Component</h1>
  );
}
const mapDispatchToProps = (dispatch)=>{
  return { 
    onMoviesLoaded: () => dispatch(actionCreators.loadMovies())
  }

}
export default connect(null,mapDispatchToProps)(Movies);
