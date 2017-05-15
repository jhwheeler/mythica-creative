const SHOW_TIP = 'SHOW_TIP';
const HIDE_TIP = 'HIDE_TIP';

export const showTip = (question, index) = => {
  return {
    type: SHOW_TIP,
    question,
    index,
  }
}

export const hideTip = (question, index) = => {
  return {
    type: HIDE_TIP,
    question,
    index,
  }
}
