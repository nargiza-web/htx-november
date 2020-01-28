import React, {Component} from 'react'
import './App.css'
import { thisExpression } from '@babel/types';

class Body2 extends Component {
  render(){
    return(
      <div className="container">
        <h2 className="blue">{this.props.heading}</h2>
        <p>{this.props.children}</p>
        <div className="body2orange">
          <div>{this.props.comments}</div>
          <div className="left">{this.props.likes}</div>
        </div>
      </div>
    )
  }
}

export default Body2