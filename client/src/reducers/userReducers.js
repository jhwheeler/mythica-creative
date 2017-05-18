import { addUser } from '../actions/userActions';

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
      break;
    default:
      return state;
  }
  return state;
}

export default users;
