import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import users from './users';
import tips from './tips';

const reducers = {
  users,
  tips,
  form: formReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
