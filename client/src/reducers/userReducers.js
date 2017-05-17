import { ADD_USER, ADD_ANSWER, UPDATE_ANSWER } from '../actions/userActions';

const users = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        Object.assign({},
        name: action.name,
        email: action.email,
        )
      ];
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
