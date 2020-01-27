import React, {Component} from 'react';
import Counter from './Counter'
import './App.css';

class App extends Component {
  
  render(){
    return(
      <div className="flexy">
          <div></div>
          <Counter/>
      </div>
    )
  }
}

export default App;
