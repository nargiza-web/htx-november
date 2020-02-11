import React from 'react';

import './App.css';

function App(props) {
  
  const handleClick = () => {
    console.log("clicked")
  }
  return (
    <div className="App">
      <h1>Upload your Image</h1>
      <img  src="/images/cat.png" width=300 height=300/>
      <button onClick={handleClick} >Classify</button>
    </div>
  );
}

export default App;
