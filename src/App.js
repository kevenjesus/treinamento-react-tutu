import React, { Component } from 'react';
import Tasks from './Tasks';
import { Link } from 'react-router-dom';

class App extends Component {
  

  render() {
    return (
    <div>
      <h1>App</h1>
      <Link to="/tasks">Tasks</Link>
     </div>
    );
  }
}

export default App;
