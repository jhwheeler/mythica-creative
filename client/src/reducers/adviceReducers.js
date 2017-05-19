import { showAdvice, hideAdvice } from '../actions/adviceActions';

const advice = (state = [], action) => {
  switch(action.type) {
    case 'SHOW_ADVICE':
      return [
        ...state, {
        question: action.question,
        advice: action.index,
        }
      ];
      break;
    case 'HIDE_ADVICE':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1),
      ];
      break;
    default:
      return state;
  }
  return state;
}

export default advice;
