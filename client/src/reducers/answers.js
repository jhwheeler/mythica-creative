const answers = (state = [], action) => {
  switch (action.type) {
    case ADD_ANSWER:
      return [...state, {
        question: action.question,
        text: action.index,
      }];
    case REMOVE_ANSWER:
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1),
      ];
    case UPDATE_ANSWER:
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1),
      ]
    default:
      return state;
  }
  return state;
}

export default answers;
