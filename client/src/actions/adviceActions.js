const SHOW_ADVICE = 'SHOW_ADVICE';
const HIDE_ADVICE = 'HIDE_ADVICE';

export const showAdvice = (question, index) => {
  return {
    type: SHOW_ADVICE,
    question,
    index,
  }
}

export const hideAdvice = (question, index) => {
  return {
    type: HIDE_ADVICE,
    question,
    index,
  }
}
