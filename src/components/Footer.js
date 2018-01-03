import React from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import '../assets/scss/index.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="contact-links">
        <span><a href="mailto:izzykeanu@gmail.com">izzykeanu@gmail.com</a></span>
        <span><a href="https://www.linkedin.com/in/justin-chi-64b12b37">LinkedIn</a></span>
        <span><a href="https://github.com/vai0">GitHub</a></span>
      </div>
    );
  }
}

// export default Footer;
export { Footer };