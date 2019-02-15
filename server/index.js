const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const jsonParse = bodyParser.json();
const db = require('../database/index.js');
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use (cors());

app.use(express.static(__dirname + '/../client/components'));

app.post('/posts', jsonParse, function (req, res) {
//Save data to database
var translation = JSON.stringify(req.body)
var databasePair = {
	wordPair: translation
};
	db.save(databasePair);
 	console.log(req.body);
});

app.get('/posts', function (req, res) {
//Retrieve data from database
//Send to client

});


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


