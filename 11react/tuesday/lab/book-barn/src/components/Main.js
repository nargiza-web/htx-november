import React, {Component} from 'react'
import './Header.css'
const URL = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/"

class Main extends Component {
  render(){

    const bookItems = this.props.books.map((book) => {
      return (
        <div >
        <li>
          <p> {book.title} </p>
          <img alt="images" src={`${URL}${book.imageLink}`}/>
        </li>
        </div>
      )
    })
    
    return (
      <div>
        {bookItems}
      </div>
    )
  }
}

export default Main