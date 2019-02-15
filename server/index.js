const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const jsonParse = bodyParser.json();
const db = require('../database/index.js');
const port = process.env.PORT || 3000;
const cors = require('cors');
const Pair = require('../database/index.js');

app.use (cors());

app.use(express.static(__dirname + '/../client/components'));

app.post('/posts', jsonParse, function (req, res) {
//Save data to database
// var translation = JSON.stringify(req.body)
// var databasePair = {
// 	wordPair: translation
// };
// 	db.save(databasePair);
var SpanishWord;
var EnglishWord;

for (let key in req.body) {
	SpanishWord = key;
	EnglishWord = req.body[key]
};

var databasePair = {
	spanishTR: SpanishWord,
	englishTR: EnglishWord
};

db.save(databasePair);
 	console.log(req.body);
 	console.log(typeof translation);
});

app.get('/posts', jsonParse, function (req, res) {
//Retrieve data from database
//Send to client
Pair.Pair.find({}).then(pairs => {

	res.send(pairs);
})

});


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


//var databasePair = {
// Spanish: key
// English: translation[key]
//}








