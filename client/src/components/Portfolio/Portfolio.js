import React from 'react';

import css from './Portfolio.css';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "logo"
    }
  }

  getSelectedCategoryData = () => {
    return this.props.categories[this.state.selectedCategory];
  }

  onTabSelect = tab => {
    debugger;
    this.setState({selectedCategory: tab});
  }

  renderTabs = tabs => {
    return tabs.map((tab, index) => (
      <div
        className="category"
        onClick={this.onTabSelect.bind(null, tab)}
        key={index}>
          <h1>{tab}</h1>
      </div>
      )
    )}

  render() {
    const portfolioImages = this.getSelectedCategoryData();
    const categoryKeys = Object.keys(this.props.categories);

    return (
      <div className="portfolio">
        <div className="portfolio-nav">
          {this.renderTabs(categoryKeys)}
        </div>
        <div className="portfolio-images">
          {portfolioImages.map((image, index) =>
            <div className="portfolio-image">
              <img
                src={image.src}
                alt={image.name}
                key={index} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
