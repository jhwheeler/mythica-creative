import React from 'react';

import Project from '../Project/Project';

import css from './Projects.scss';
import images from './Projects.data';

const Projects = props => {
  return (
      <div className="projects">
        <h1 className="projects-header">PROJECTS</h1>
        <div className="projects-wrapper">
          {images.map((project, index) =>
            <Project
              key={index}
              preview={project.preview}
              presentation={project.presentation}
            />
          )}
        </div>
      </div>
  );
}

export default Projects;
