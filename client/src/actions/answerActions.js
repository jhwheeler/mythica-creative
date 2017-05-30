import axios from 'axios';

const API_URL = 'http://localhost:7498/api';

const SEND_ANSWERS_SUCCESS = 'SEND_ANSWERS_SUCCESS';

export const sendAnswersSuccess = answers => {
  return {
    type: 'SEND_ANSWERS_SUCCESS',
    answers
  }
}

export const sendAnswers = answers => {
  return (dispatch) => {
    return axios.post(`${API_URL}/answers`, {answers})
      .then(response => {
        dispatch(sendAnswersSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
