import React from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import css from './index.scss';
import store, { history } from './store';

import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Quiz from './components/Quiz/Quiz';
import Congratulations from './components/Congratulations/Congratulations';
import Blueprint from './components/Blueprint/Blueprint';
import NotFound from './components/NotFound/NotFound';

const Root = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route path="/brand" component={Quiz} />
          <Route path="/congratulations" component={Congratulations} />
          <Route path="/answers/:_id" component={Blueprint} />
          <Route path="*" component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
}

render(<Root/>, document.querySelector("#root"));
