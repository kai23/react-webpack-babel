import React, { Component } from 'react';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <p> Ce message s'affichera partout ! </p>
        <Routes />
        <p> Ce message s'affichera partout, mais en dessous !</p>
      </div>
    );
  }
}

export default App;
