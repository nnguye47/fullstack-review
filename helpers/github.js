const axios = require('axios');
const config = require('../config.js');


let getReposByUsername = (username, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  console.log('hello from getRepostByUsername: ', username);

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios.get(options.url, options.headers)
    .then((response) => {
      console.log('the response from github: ', response.data);
      callback(null, response)
    })
    .catch((err) => {
      console.log('there was an error', err)
    })

}

module.exports.getReposByUsername = getReposByUsername;