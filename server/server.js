const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      path = require('path');

const { PORT, DATABASE_URL } = require('./config'),
      {router} = require('./routes');

const app = express();

mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api/answers', router);

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

app.get(['/', '/work', '/contact', '/brand', '/congratulations', '/answers/:_id', '/404'], (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'public', 'index.html'))
});

app.get('*', (req, res) => {
  res.redirect('/404');
});

function runServer(databaseUrl=DATABASE_URL, port=PORT) {

  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        const timeNow = new Date();
        console.log(`Mythica Creative server listening on port ${port} at ${timeNow}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
     return new Promise((resolve, reject) => {
       console.log('Closing server');
       server.close(err => {
         if (err) {
           return reject(err);
         }
         resolve();
       });
     });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};
