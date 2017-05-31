import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import advice from './adviceReducers';
import answers from './answerReducers';

const reducers = {
  advice,
  answers,
  form: formReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
