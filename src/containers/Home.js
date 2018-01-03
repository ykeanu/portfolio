// import React, { Component, PropTypes } from 'react';
// import styled from 'styled-components';

// export default class Home extends Component {
//   static propTypes = {};

//   render() {
//     return (
//       <div>
//         <h1>Izzy Keanu's Home!</h1>
//         <Image src={require('../assets/images/headshot.jpg')} alt='Izzy Keanus headshot' />
//         <div className="hero-description">
//         Recent UCLA graduate with industry experience in big data for healthcare and full-stack software development. Strong experience working with Javascript, Node.js, React, React Native, C#, MySQL, MongoDB and web/iOS/Android development.
//         </div>
//       </div>
//     );
//   }
// }

// const Image = styled.img`
//   width: 100%;
// `;


import React from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import { enterAR, disableHunt, indicateInsidePortal } from '../../actions';
import 'assets/scss/index.scss';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Navbar />
        <Hero />
        <About statements={this.props.statements}/>
        <h2 id="projects" className="section-title">Projects</h2>
        <Projects projects={this.props.projects}/>
        <div className="background"></div>
        <h2 id="contact" className="section-title">Contact me!</h2>
        <ContactLinks />
        <Footer />
      </div>
    );
  }
}
