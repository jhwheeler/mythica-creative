import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Portfolio.css';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "all"
    }
  }

  getSelectedCategoryData = () => {
    if (this.state.selectedCategory === "all") {
      const categoryKeys = Object.keys(this.props.categories);
      let categoryArray = [];
      for (let i = 0; i < categoryKeys.length; i++) {
        categoryArray = categoryArray.concat(this.props.categories[categoryKeys[i]]);
      }
      return categoryArray;
    } else {
      return this.props.categories[this.state.selectedCategory];
    }
  }

  onTabSelect = tab => {
    this.setState({selectedCategory: tab});
  }

  renderTabs = tabs => {
    return tabs.map((tab, index) => (
      <div
        className="category"
        onClick={this.onTabSelect.bind(null, tab)}
        key={index}>
          <h3>{tab.toUpperCase()}</h3>
      </div>
      )
    )}

  render() {
    const portfolioImages = this.getSelectedCategoryData();
    const categoryKeys = Object.keys(this.props.categories);
    categoryKeys.unshift("all");

    return (
      <div className="portfolio">
        <div className="portfolio-header">
          <h2>Portfolio Gallery</h2>
        </div>
        <div className="portfolio-wrapper">
          <div className="portfolio-nav">
            {this.renderTabs(categoryKeys)}
          </div>
          <div className="portfolio-images">
            {portfolioImages.map((image, index) =>
              <div className="portfolio-image">
                <img
                  src={image.src}
                  title={image.name}
                  key={index} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Portfolio.PropTypes = {
  categories: PropTypes.object.isRequired,
}
