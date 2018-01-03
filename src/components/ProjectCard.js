import React from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import { ProjectSkills, ProjectLinks } from './index.js';
import 'assets/scss/index.scss';

class ProjectCard extends React.Component {
  componentDidMount() {
    this.refs.screenshot.style.background = "url('./images/" + this.props.projectScreenshot + "')";
    this.refs.screenshot.style.backgroundSize = 'cover';
    this.refs.screenshot.style.backgroundRepeat = 'no-repeat'
  }
  render() {
    return (
      <div className="project-card">
        <div className="project-screenshot" ref="screenshot"></div>
        <div className="project-background"></div>
        <div className="project-content">
          <h3>{this.props.projectTitle}</h3>
          <p dangerouslySetInnerHTML={{__html: this.props.projectDescription}}></p>
          <ProjectSkills skills={this.props.projectSkills}/>
          <ProjectLinks links={this.props.projectLinks}/>
        </div>
      </div>
    );
  }
}

// export default ProjectCard;
export { ProjectCard };
