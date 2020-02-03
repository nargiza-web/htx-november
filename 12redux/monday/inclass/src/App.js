import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import FancyCounter from './components/FancyCounter';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
        <Login />
        <Counter />
        <FancyCounter />
    </div>
  );
}

export default App;
