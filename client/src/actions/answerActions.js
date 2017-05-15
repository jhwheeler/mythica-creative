const ADD_ANSWER = 'ADD_ANSWER';
const REMOVE_ANSWER = 'REMOVE_ANSWER';
const UPDATE_ANSWER = 'UPDATE_ANSWER';

export const addAnswer = (question, text)=> {
  return {
    type: ADD_ANSWER,
    question,
    text,
  }
}

export const removeAnswer = (question, answer) => {
  return {
    type: REMOVE_ANSWER,
    question,
    answer,
  }
}

export const updateAnswer = (question, answer) => {
  return {
    type: UPDATE_ANSWER,
    question,
    answer,
  }
}
