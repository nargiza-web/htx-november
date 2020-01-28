import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      movies: [] 
    }

  }

  // when the component is added to the virtual DOM 
  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = () => {
    
    fetch('http://www.omdbapi.com/?s=batman&apikey=564727fa')
    .then(response => response.json())
    .then(json => {
      this.setState({
        movies: json.Search
      })
    })
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} type="text" />
      <MovieList movies = {this.state.movies} />
      </div>
    )
  }

}

export default App;
