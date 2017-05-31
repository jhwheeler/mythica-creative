import sendAnswers from '../actions/answerActions';

const answers = (state =[], action) => {
  switch(action.type) {
    case 'SEND_ANSWERS_SUCCESS':
      return [
        ...state,
        Object.assign({}, action.answers)
      ];
      break;
    default:
      return state;
  }
  return state;
}

export default answers;
