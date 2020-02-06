import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import TodoList from './components/TodoList'

class App extends Component {

  render() {
    return (
      <div>
        <Counter  />
        <TodoList />
      </div>
    )
  }

}

export default App;
