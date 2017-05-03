import React from 'react';

import css from './Projects.css';
import Button from '../Button/Button';
import projectsData from './Projects.data';

const Projects = (props) => {
  return (
      <div className="projects">
        <h1 className="projects-header">PROJECTS</h1>
        <div className="projects-wrapper">
          {projectsData.map((project, index) =>
            <div key={index} className="project">
              <img src={project.preview} />
              <Button label="EXPLORE" />
            </div>
          )}
        </div>
      </div>
  );
}

export default Projects;
