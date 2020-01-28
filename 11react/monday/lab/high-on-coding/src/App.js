import React, {Component} from 'react';
import Header from './Header'
import Body1 from './Body1'
import Body2 from './Body2'
import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <Body1/>
        <Body2 heading="Hello WatchKit" comments="12 comments" likes="124 likes">Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch</Body2>
        <Body2 heading="Introduction to Swift" comments="15 comments" likes="45 likes">Swift is a modern programming language developed by Apple to create the next generation iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.</Body2>
      </div>
    )
  }
}

export default App;
