import React from 'react';

import css from './CaseStudy.css';

const CaseStudy = props => {
  return (
    <div className="case-study">
      <img
        className="main-image"
        src={this.props.mainImage}
        alt={this.props.mainImageName}
      >
      <div className="case-study-text">
        <h1>{this.props.header}</h1>
        <h2>{this.props.subHeader}</h2>
        <p>{this.props.summary}</p>
        <p>Read More</p
        <div className="expanded-text">
          {this.props.expandedText}
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;

