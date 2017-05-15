import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import answers from './answers';
import tips from './tips';

const reducers = {
  answers,
  tips,
  form: formReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
