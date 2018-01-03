import React from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import { ProjectLink } from './index.js';
import 'assets/scss/index.scss';

class ProjectLinks extends React.Component {
  render() {
    return (
      <div className="project-links">
        {Object.keys(this.props.links).map((key, index) => {
          return <ProjectLink site={key} link={this.props.links[key]} key={index} />
        })}
      </div>
    );
  }
}

// export default ProjectLinks;
export { ProjectLinks };
