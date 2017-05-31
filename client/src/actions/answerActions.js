import axios from 'axios';

const SEND_ANSWERS_SUCCESS = 'SEND_ANSWERS_SUCCESS';

export const sendAnswersSuccess = answers => {
  return {
    type: 'SEND_ANSWERS_SUCCESS',
    answers
  }
}

export const sendAnswers = answers => {
  return (dispatch) => {
    return axios.post(`/api/answers`, {answers})
      .then(response => {
        dispatch(sendAnswersSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
