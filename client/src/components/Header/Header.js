import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import css from './Header.css';
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

  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      let scrollTop = this.isScrollTop();
      if (scrollTop === this.state.scrollTop) {
        return;
      } else {
      this.setState({scrollTop})
      }
    })
  }

  render() {
    return (
      <nav className={(this.state.scrollTop === true) ? 'transparent-menu' : 'solid-menu' }>
        <Link to="/" className="logo" aria-label="Mythica Creative Homepage">
          <img src={logo} alt="Mythica Creative" />
        </Link>
        <div className="links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/work" className="nav-link">Work</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>
    );
  }
}
