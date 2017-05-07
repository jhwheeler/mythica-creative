import React from 'react';

import css from './CaseStudy.css';
import Button from '../Button/Button';

const CaseStudy = props => {
  return (
    <div className="case-study">
      <div className="main-image">
        <img src={props.mainImage} alt={props.mainImageName} />
      </div>
      <div className="case-study-text">
        <h1>{props.header}</h1>
        <hr />
        <p><strong>{props.subHeader}</strong></p>
        <hr />
        <p>{props.summary}</p>
        <Button label="READ MORE"></Button>
        <div dangerouslySetInnerHTML={{__html: props.expandedText}} className="expanded-text" />
      </div>
    </div>
  );
}

export default CaseStudy;

