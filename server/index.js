const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { getReposByUsername } = require('../helpers/github.js');


// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
app.use(express.static('./client/dist'));
app.use(bodyParser.json())

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  getReposByUsername(req.body.term, (err, data) => {
    if (err) {
      console.log('there was err in post', err);
    } else {
      console.log('successful data gathered: ', data)
    }
  });
  res.sendStatus(201);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  console.log('hello from server');
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

