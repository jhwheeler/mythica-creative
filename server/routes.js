const express = require('express'),
      jsonParser = require('body-parser').json(),
      mongoose = require('mongoose');

const {Answer} = require('./models');

mongoose.Promise = global.Promise;

const router = express.Router();

router.use(jsonParser);

router.get('/answers', (req, res) => {
  Answer
    .find()
    .exec()
    .then(data => res.json(data))
    .catch(
      err => {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'})
      }
    );
});

router.post('/answers', (req, res) => {
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

module.exports = {router}
