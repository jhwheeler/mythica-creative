import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import rootReducer from './reducers/index';

const initialState = {
  questions,
  tips
};

export const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
);

export default store;
