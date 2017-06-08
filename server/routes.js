const express = require('express'),
      jsonParser = require('body-parser').json(),
      mongoose = require('mongoose');

const {Answer} = require('./models');

mongoose.Promise = global.Promise;

const router = express.Router();

router.use(jsonParser);

router.get('/:_id', (req, res) => {
  Answer
    .findOne({_id: req.params._id})
    .exec()
    .then(data => {
      if (data.answers.length < 1) {
        res.status(404).json({message: 'No Such Record Exists'});
      } else {
        res.json(data.answers[0]);
      }
    })
    .catch(
      err => {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'})
      }
    );
});

router.post('/', (req, res) => {
  const date = new Date();

  Answer
    .create({
      answers: req.body.answers,
      date: date,
    })
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.error(err);
      res.status(500).json({message: 'Internal Server Error'});
    });
});


router.put('/:_id', (req, res) => {
  if (!(req.params._id && req.body._id && (req.params._id === req.body._id))) {
    const message = (
      `Request path id (${req.params._id}) and request body id ` +
      `(${req.body._id}) must match`);
    console.error(message);
    res.status(400).json({message: message});
  }

  const toUpdate = {};
  const updateableFields = ['answers', 'date']

  updateableFields.forEach(field => {
    if (field in req.body) {
      toUpdate[field] = req.body[field];
    }
  });

  Answer
    .findOneAndUpdate({_id: req.params._id}, {$set: toUpdate})
    .exec()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err));
});

router.delete('/:_id', (req, res) => {
  Answer
    .findOneAndRemove({_id: req.params._id})
    .exec()
    .then(data => res.status(204).json(data))
    .catch(err => res.status(500).json({message: 'Internal server error'}));
});

module.exports = {router}
