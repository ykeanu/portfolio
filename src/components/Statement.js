import React from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import 'assets/scss/index.scss';

class Statement extends React.Component {
  render() {
    return (
      <div className="statement">
        <div className="input-statement">{this.props.statement.input}</div>
        <div className="return-statement" dangerouslySetInnerHTML={{__html: this.props.statement.return}}></div>
      </div>
    );
  }
}

// export default Statement;
export { Statement };
