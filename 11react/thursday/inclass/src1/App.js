import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props) 
    this.state = {
      books: [] 
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/books')
    .then(response => response.json())
    .then(json => {
      this.setState({
        books: json 
      })
    })
  }

  render() {

    const bookItems = this.state.books.map(book => {
      return <div key = {book.isbn}>{book.name} - {book.publisher}</div>
    })

    return (
      <div>{bookItems}</div>
    )
  }
}

export default App;
