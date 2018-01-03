import React from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import 'assets/scss/index.scss';

class ProjectSkill extends React.Component {
  render() {
    return (
      <span className="project-skill">{this.props.skill}</span>
    );
  }
}

// export default ProjectSkill;
export { ProjectSkill };
