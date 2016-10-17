var Request = require('request-promise');

var options = {
    uri: 'https://api.spotify.com/v1/artists?ids=0oSGxfWSnnOXhD2fKuz2Gy',
    headers: {'User-Agent': 'Request-Promise'},
    json: true 
};

Request(options)
    .then((data) => {console.dir(data)})
    .catch((error) => {console.log(error)})
