import React from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import '../assets/scss/index.scss';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.typewrite = this.typewrite.bind(this);
    this.state = {
      heroText: ''
    }
  }

  typewrite(str) {
    var text = '';
    var typespeed = 0;
    var mintypespeed = 90;
    var maxtypespeed = 150;
    var self = this;

    for (var i = 0; i <= str.length; i++) {
      (function(x) {
        typespeed += Math.random() * (maxtypespeed - mintypespeed) + mintypespeed;
        setTimeout(function() {
          self.setState({
            heroText: text + '<span>&nbsp;</span>'
          });
          text += str[x];
        }, typespeed);
      }(i));
    }
  }

  componentDidMount() {
    this.typewrite('Izzy Keanu');
  }

  render() {
    return (
      <div className="hero-container">
        <div className="hero-title" ref="heroTitle" dangerouslySetInnerHTML={{__html: this.state.heroText}}></div>
        <div className="hero-description">
        Recent UCLA graduate with industry experience in big data for healthcare and full-stack software development. Strong experience working with Javascript, Node.js, React, React Native, C#, MySQL, MongoDB and web/iOS/Android development.
        </div>
      </div>
    );
  }
}

// export default Hero;
export { Hero };
