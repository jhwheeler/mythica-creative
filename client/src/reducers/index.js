import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import advice from './adviceReducers';

const reducers = {
  advice,
  form: formReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
