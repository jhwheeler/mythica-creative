const initialState = {
  answers: [],
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return Object.assign({}, state,
        name: action.name,
        email: action.email,
      );
    case 'ADD_ANSWER':
      return [...state, {
        answer: action.answer,
      }];
    case 'UPDATE_ANSWER':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1),
      ]
    default:
      return state;
  }
  return state;
}

export default users;
