import React from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import '../assets/scss/index.scss';

class ProjectLink extends React.Component {
  render() {
    const buttonText = (this.props.site === 'github') ? 'view code' : 'explore demo';
    return (
      <a href={this.props.link} className="project-link">{buttonText}</a>
    );
  }
}

// export default ProjectLink;
export { ProjectLink };
