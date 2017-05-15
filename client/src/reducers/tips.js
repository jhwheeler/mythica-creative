const tips = (state = [], action) => {
  switch(action.type) {
    case 'SHOW_TIP':
      return [...state, {
        question: action.question,
        tip: action.index,
      }];
    case 'HIDE_TIP':
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
