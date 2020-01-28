import React, {Component} from 'react';
import Header from './components/Header'
import Main from'./components/Main'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      books: [],
      selectedBooks: [],
      languages: []
    }
  }
  
  componentDidMount(){
    this.fetchBooks()
  }
  
  fetchBooks = () => {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then(json => {
      this.setState({
        books: json,
        selectedBooks:json
      },() => {
        this.getLanguages()
      })
    })
  }
  
  getLanguages = () => {
    let languages = this.state.books.map((book) => book.language)
    let languagesUnique = this.uniqueLanguages(languages)
    this.setState({
      languages: languagesUnique
    })
  }
  
  uniqueLanguages = () => {
    let languagesUnique = ['All']
    for(let i=1; i<languages.length; i++){
      if(!(languagesUnique.includes(languages[i]))){
        languagesUnique.push(languages[i])
      }
    }
    return languagesUnique
  }
  
  
  render(){
    return (
      <div>
        <Header/>
        <Main books={this.state.books}/>
      </div>
    )
  }
}

export default App;
