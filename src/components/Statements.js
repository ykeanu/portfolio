import React from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import { Statement } from './index.js';
import '../assets/scss/index.scss';

class Statements extends React.Component {
  render() {
    return (
      <div>
        {this.props.statements.map((statement, index) => {
          return <Statement statement={statement} key={index} />;
        })}
        <div className="statement">
          <div className="input-statement">
            <span>&nbsp;</span>
          </div>
        </div>
      </div>
    );
  }
}

// export default Statements;
export { Statements };
