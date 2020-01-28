import React, {Component} from 'react';
import Welcome from './Welcome'
import Header from './Header'

class App extends Component {
  render (){
    return (
      <div>
      <Header/>
      <Welcome name="John"/>
      </div>
      
    )
  }
}



export default App;
