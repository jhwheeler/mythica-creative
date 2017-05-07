import React from 'react';

import css from './CaseStudy.css';

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
        <p>Read More</p>
        <div className="expanded-text">
          {props.expandedText}
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;

