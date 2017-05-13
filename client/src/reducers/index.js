import { combineReducers } from 'redux';

import answers from './answers';
import tips from './tips';

const rootReducer = combineReducers({ answers, tips });

export default rootReducer;
