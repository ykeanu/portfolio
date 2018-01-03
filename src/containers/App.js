import React, { Component } from 'react';
import Home from './Home';
import projectDetails from '../constants/projectDetails';
import statements from '../constants/aboutMe';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
        <Home projects={projects} statements={statements}/>
      </div>
    );
  }
}

export default App;
