import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import users from './userReducers';
import advice from './adviceReducers';

const reducers = {
  users,
  advice,
  form: formReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
