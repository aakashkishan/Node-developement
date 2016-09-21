/****************************************************************************
* wikipedia-scrapper
*
* A simple Wikipedia Scrapper that returns a JSON scrapped from Wikipedia.
*
* INPUT
*  - The URL should be passed as a query string inside url parameter
*
* OUTPUT
*  - The output contains three parameter: heading, body and error
*  - 'heading' contains the heading of the document
*  - 'body' conatins the first paragraph of text
*  - 'error' parameter is whenever something goes wrong
****************************************************************************/

var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

var port    = process.env.PORT || 8000;
var address = process.env.ADDRESS || '127.0.0.1';

app.get('/', function(req, res) {
  var url = req.query.url;
  // Accepts only a valid wikipedia URL. 
  if( !url.match(/https:\/\/en.wikipedia.org\/wiki\/[\w\.?=%&=\-@/$,+]+/ig || typeof url === 'undefined' ))
    res.json({error : "invalid url"});
  else {
    request(url, function(err, response, body) {
      if (response.statusCode == 200 && !err) {
        var json = {heading : "", body : ""};
        // To access the DOM. Loads the returned data into cheerio.
        var $    = cheerio.load(body);

        // Extracts the heading and the first paragraph using cheerio's DOM functions.
        json.heading = $('h1#firstHeading').text().trim();
        json.body  = $('#mw-content-text > p').first().text().trim();

        res.json(json);
      }
      else
        res.status(404).json({err : "Server Is not Responding"});
    });
  }
});

app.listen(port, address, function() {
  console.log(`Listening at ${address}:${port}`);
});
