import { SHOW_ADVICE, HIDE_ADVICE } from '../actions/adviceActions';

const tips = (state = [], action) => {
  switch(action.type) {
    case 'SHOW_ADVICE':
      return [...state, {
        question: action.question,
        tip: action.index,
      }];
    case 'HIDE_ADVICE':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1),
      ]
    default:
      return state;
  }
  return state;
}

export default tips;
