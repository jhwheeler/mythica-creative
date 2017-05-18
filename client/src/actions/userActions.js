const ADD_USER = 'ADD_USER';

export const addUser = (name, email) => {
  return {
    type: ADD_USER,
    name,
    email,
  }
}
