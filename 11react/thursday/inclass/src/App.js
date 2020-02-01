import React, { Component } from 'react';
import './App.css';
import { useState, useEffect } from 'react'
import { render } from '@testing-library/react';
import MovieList from './MovieList';

/*
const App = (props) => {
  return <h1>Hello World</h1>
} */

function App() {
  
  // destructoring assignment 
  const [count,setCount] = useState(99)
  const [movies, setMovies] = useState(['Some Movie'])

  // componentDidMount/componentDidUpdate
  useEffect(() => {
   // fetch movies 
    fetch('http://www.omdbapi.com/?s=batman&apikey=564727fa')
    .then(response => response.json())
    .then(json => {
      setMovies(json.Search)
    })

  },[]) // only fire when the count value changes

  function buildMoviesUI() {

    return (
      movies.map((movie) => {
        return <h1>{movie.Title}</h1>
      })
    )
  }

  return (

    <div><h3>{count}</h3>
      <button onClick = {() => setCount(count + 1)}>Increment</button>
      <ul>
        <MovieList movies = {movies} />
      </ul>
      </div>
  )
}

export default App;
