import React from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import 'assets/scss/index.scss';

class ProjectSkills extends React.Component {
  render() {
    return (
      <div className="project-skills">
        {this.props.skills.map((skill, index) => {
          return <ProjectSkill skill={skill} key={index} />;
        })}
      </div>
    );
  }
}

// export default ProjectSkills;
export { ProjectSkills };
