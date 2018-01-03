import React from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import { ProjectCard } from './index.js';
import 'assets/scss/index.scss';

class Projects extends React.Component {
  render() {
    return (
      <div className="projects-container">
        {this.props.projects.map((project, index) => {
          return (
            <ProjectCard projectTitle={project.title}
              projectDescription={project.description}
              projectSkills={project.skills}
              projectLinks={project.links}
              projectScreenshot={project.screenshot}
              key={index} />
          )
        })}
      </div>
    );
  }
}

// export default Projects;
export { Projects };
