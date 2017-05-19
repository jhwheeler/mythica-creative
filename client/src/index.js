import React from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import css from './index.css';
import store, { history } from './store';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import BrandQuiz from './components/BrandQuiz/BrandQuiz';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

const Root = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
            <Route path="/brand" component={BrandQuiz} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

render(<Root/>, document.querySelector("#root"));
