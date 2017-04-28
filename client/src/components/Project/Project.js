import React from 'react';

import Button from '../Button/Button';

import css from './Project.css';

const Project = (props) => {
  return (
    <div className="project">
      <img src={props.preview} />
      <Button label="EXPLORE" />
    </div>
  );
}

export default Project;
