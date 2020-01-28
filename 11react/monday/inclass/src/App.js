import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import Header from './Header'
import DisplayName from './DisplayName';
import Counter from './Counter';

class App extends Component {
  
  // render is a required function of a Component
  // JSX  
  render() {
    return (
      <div>
        <Counter />
      </div>
    )
    
  }
}


export default App;
