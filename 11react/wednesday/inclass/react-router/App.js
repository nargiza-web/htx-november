import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return <div>
      <h1>App</h1>
      <a href="/posts/567">Show Post Details</a>
    </div>
  }
}

export default App;
