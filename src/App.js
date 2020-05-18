import React, { Component } from 'react';
import './App.css';
import ListBox from './Containers/ListBox.js'

class App extends Component{
  render(){
    return(
      <div>
        <h1>Upcoming Film Releases for UK</h1>
        <hr></hr>
        <ListBox />
      </div>
    )
  }
}

export default App;
