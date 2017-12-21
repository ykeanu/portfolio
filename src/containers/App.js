import React, { Component } from 'react';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
        <Home />
      </div>
    );
  }
}

export default App;
