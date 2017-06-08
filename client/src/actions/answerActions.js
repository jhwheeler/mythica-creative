import axios from 'axios';

const SEND_ANSWERS_SUCCESS = 'SEND_ANSWERS_SUCCESS';
const FETCH_ANSWERS_SUCCESS = 'FETCH_ANSWERS_SUCCESS';

export const sendAnswersSuccess = answers => {
  return {
    type: 'SEND_ANSWERS_SUCCESS',
    answers,
  }
}

export const fetchAnswersSuccess = answers => {
  return {
    type: 'FETCH_ANSWERS_SUCCESS',
    answers,
  }
}

export const sendAnswers = answers => {
  return (dispatch) => {
    return axios.post(`/answers`, {answers})
      .then(response => {
        dispatch(sendAnswersSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchAnswers = (id) => {
  return (dispatch) => {
    return axios.get(`/answers/${id}`)
      .then(response => {
        dispatch(fetchAnswersSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
