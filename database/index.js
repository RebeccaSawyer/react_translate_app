const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/translations', { useNewUrlParser: true });
const db = mongoose.connection;

var pairSchema = mongoose.Schema({

	spanishTR: String,
	englishTR: String
});

var Pair = mongoose.model('Pairs', pairSchema);

  var save = function (pairObj) {
  var newPair = new Pair(pairObj);
  newPair.save();
  //console.log(newPair);

 }

module.exports.save = save;
module.exports.Pair = Pair;