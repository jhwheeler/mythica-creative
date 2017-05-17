const ADD_USER = 'ADD_USER';
const ADD_ANSWER = 'ADD_ANSWER';
const UPDATE_ANSWER = 'UPDATE_ANSWER';

export const addUser = (question, text)=> {
  return {
    type: ADD_USER,
    name,
    email,
  }
}

export const addAnswer = (question, text)=> {
  return {
    type: ADD_ANSWER,
    question,
    text,
  }
}

export const updateAnswer = (question, answer) => {
  return {
    type: UPDATE_ANSWER,
    question,
    answer,
  }
}
