import React from 'react';

import css from './CaseStudies.css';
import CaseStudy from '../CaseStudy/CaseStudy';
import Gallery from '../Gallery/Gallery';
import Button from '../Button/Button';
import caseStudiesData from './CaseStudies.data';

const CaseStudies = props => {
  return (
      <div className="case-studies">
        <h1 className="case-studies-header">CASE STUDIES</h1>
        <div className="case-studies-wrapper">
          {caseStudiesData.map((caseStudy, index) =>
            <div className="case-study-wrapper">
              <CaseStudy
                mainImage={caseStudy.mainImage}
                mainImageName={caseStudy.mainImageName}
                header={caseStudy.header}
                subHeader={caseStudy.subHeader}
                summary={caseStudy.summary}
                expandedText={caseStudy.expandedText}
                key={index}
              />
            {/*<Gallery /> */}
            </div>
          )}
        </div>
      </div>
  );
}

export default CaseStudies;
