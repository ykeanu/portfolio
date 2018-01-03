import React from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import { Statements } from 'index.js';
import 'assets/scss/index.scss';

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="terminal">
          <div className="terminal-header">
            <div className="header-button red"></div>
            <div className="header-button yellow"></div>
            <div className="header-button green"></div>
          </div>
          <div className="terminal-window">
            <Statements statements={this.props.statements}/>
          </div>
        </div>
      </div>
    );
  }
}

// export default About;
export { About };
