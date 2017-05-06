import React from 'react';

import css from './CaseStudy.css';

const CaseStudy = props => {
  return (
    <div className="case-study">
      <img className="main-image" src={props.mainImage} alt={props.mainImageName} />
      <div className="case-study-text">
        <h1>{props.header}</h1>
        <h2>{props.subHeader}</h2>
        <p>{props.summary}</p>
        <p>Read More</p>
        <div className="expanded-text">
          {props.expandedText}
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;

