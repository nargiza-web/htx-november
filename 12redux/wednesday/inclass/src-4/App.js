import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import DisplayCounter from './components/DisplayCounter';
import Tasks from './components/Tasks'
import DisplayTasks from './components/DisplayTasks';


function App(props) {

  return (
    <div>
    <DisplayCounter />
    <Counter />
    <Tasks />
    <DisplayTasks />
    </div>
  );
}

export default App;
