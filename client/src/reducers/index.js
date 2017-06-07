import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import answers from './answerReducers';

const reducers = {
  answers,
  form: formReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
