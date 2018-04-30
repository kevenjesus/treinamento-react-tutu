import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { PureComponents, PureComponents2 } from './components-pures';

class App extends Component {

  render() {
    return (
      <div className="App">
        <PureComponents title="meu texto" />
        <PureComponents2 />
      </div>
    );
  }
}

export default App;
