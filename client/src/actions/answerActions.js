import axios from 'axios';
import { push } from 'connected-react-router';

export const saveAnswersSuccess = answers => {
  return {
    type: 'SAVE_ANSWERS_SUCCESS',
    answers,
  }
}

export const sendAnswers = answers => {
  return dispatch => {
    return axios.post(`/api/answers`, {answers})
      .then(response => {
        dispatch(saveAnswersSuccess(response.data));
        dispatch(push('/congratulations'));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchAnswers = id => {
  return dispatch => {
    return axios.get(`/api/answers/${id}`)
      .then(response => {
        dispatch(saveAnswersSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};
