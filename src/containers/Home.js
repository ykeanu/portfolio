import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <h1>Izzy Keanu's Home!</h1>
        <Image src={require('../assets/images/headshot.jpg')} alt='Izzy Keanus headshot' />
        <div className="hero-description">
        Recent UCLA graduate with industry experience in big data for healthcare and full-stack software development. Strong experience working with Javascript, Node.js, React, React Native, C#, MySQL, MongoDB and web/iOS/Android development.
        </div>
      </div>
    );
  }
}

const Image = styled.img`
  width: 100%;
`;
