const express = require('express'),
      path = require('path');

const app = express();

PORT = process.env.PORT || 7498;

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'public', 'index.html'))});

app.listen(PORT, () => {
  console.log(`Mythica Creative server listening on port ${PORT}`)
});

module.exports = app;
