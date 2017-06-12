import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import css from './Header.scss';
import logo from '../../../public/images/mythica-full-logo.png'

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      scrollTop: true
    }
  }

  isScrollTop = () => {
    const scrollY = window.scrollY;
    return scrollY === 0;
  }

  handleScroll = e => {
    let scrollTop = this.isScrollTop();
    if (scrollTop === this.state.scrollTop) {
      return;
    } else {
      this.setState({scrollTop})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const headerClass = classNames({
      'solid-menu': this.state.scrollTop,
      'transparent-menu': !this.state.scrollTop,
    });

    return (
      <nav className={headerClass}>
        <Link to="/" className="logo" aria-label="Mythica Creative Homepage">
          <img src={logo} alt="Mythica Creative" />
        </Link>
        <div className="links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/work" className="nav-link">Work</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/brand" className="nav-link">Brand Quiz</Link>
        </div>
      </nav>
    );
  }
}
