import React from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import 'assets/scss/index.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const self = this;
    smoothScroll.polyfill();

    document.addEventListener('DOMContentLoaded', function(event) {
      self.refs.navbar.addEventListener('click', function(e) {
        if (e.target.innerText === 'Projects') {
          document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        } else if (e.target.innerText === 'Contact') {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  render() {
    return (
      <nav className="navbar" ref="navbar">
        <a href="https://izzykeanu.com">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    );
  }
}

// export default Navbar;
export { Navbar };
