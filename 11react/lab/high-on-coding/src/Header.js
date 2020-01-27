import React, {Component} from 'react'
import './App.css'

class Header extends Component {
  render(){
    return(
      <div className="header">
        <h2 className="left">HighOnCoding</h2>
        <h3 className="left">Home</h3>
        <h3 className="left">Categories</h3>
      </div>
    )
  }
}

export default Header