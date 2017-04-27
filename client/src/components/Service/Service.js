import React from 'react';

import Button from '../Button/Button';

const Service = (props) => {
  return (
    <div>
      <img src={props.icon} />
      {props.header}
      {props.description}
      <Button label="EXPLORE" />
    </div>
  );
}

export default Service;
