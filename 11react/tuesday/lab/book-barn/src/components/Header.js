import React, {Component} from 'react'
import './Header.css'
class Header extends Component {
  render(){
    return(
      <div className="flexy">
        <div>Home</div>
        <div>My Books</div>
        <div>Browse</div>
        <div>Community</div>
        <div>Sign In</div>
        <div>Join</div>
      </div>
    )
  }
}

export default Header