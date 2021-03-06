import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './CaseStudy.scss';
import Button from '../Button/Button';

export default class CaseStudy extends Component {
  constructor() {
    super();
    this.state = {
      readMore: false
    }
  }

  expandText(event) {
    event.preventDefault();
    let readMore = this.state.readMore;
    this.setState({
      readMore: readMore === true ? false : true
    });
  }

  render() {
    let expandedText = null;
    if (this.state.readMore === true) {
      expandedText = <div dangerouslySetInnerHTML={{__html: this.props.expandedText}} className="expanded-text" />;
    } else {
      expandedText = null;
    }
    return (
      <div className="case-study">
        <div className="main-image">
          <img src={this.props.mainImage} alt={this.props.mainImageName} />
        </div>
        <div className="case-study-text">
          <h1>{this.props.header}</h1>
          <hr />
          <p><strong>{this.props.subHeader}</strong></p>
          <hr />
          <p>{this.props.summary}</p>
          <br />
          {expandedText}
          <Button label="READ MORE" onClick={this.expandText.bind(this)} />
          {this.props.link !== undefined ?
            <a href={this.props.link} target="_blank">
              <Button label="SEE IT LIVE" />
            </a>
            : null}
        </div>
      </div>
    );
  }
}

CaseStudy.PropTypes = {
  expandedText: PropTypes.string.isRequired,
  mainImage: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  link: PropTypes.string,
}
