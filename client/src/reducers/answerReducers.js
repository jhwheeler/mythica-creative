const answers = (state = {}, action) => {
  switch(action.type) {
    case 'SAVE_ANSWERS_SUCCESS':
      return action.answers;
      break;
    default:
      return state;
  }
  return state;
}

export default answers;
