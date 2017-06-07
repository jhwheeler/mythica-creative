import sendAnswers from '../actions/answerActions';
import fetchAnswers from '../actions/answerActions';

const answers = (state =[], action) => {
  switch(action.type) {
    case 'SEND_ANSWERS_SUCCESS':
      return [
        ...state,
        Object.assign({}, action.answers)
      ];
      break;
    case 'FETCH_ANSWERS_SUCCESS':
      return [
        ...state,
        Object.assign({}, action.answers)
      ];
    default:
      return state;
  }
  return state;
}

export default answers;
