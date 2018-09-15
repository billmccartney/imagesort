import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SwipeComponent} from "./swipeView";
import {data} from './raw';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Select the Images</h1>
        </header>
        <SwipeComponent data={data.images}/>
      </div>
    );
  }
}

export default App;
