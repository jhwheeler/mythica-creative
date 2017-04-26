import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import css from '../public/css/styles.css';

import App from './components/App/App';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  )
}

render(<Root/>, document.querySelector("#main"));
