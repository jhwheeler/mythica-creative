const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
  answers: {answers: String},
  date: Date,
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = {Answer};
