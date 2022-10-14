const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const showSchema = new Schema({
  title: {type: String, required:true},
  startingYear: Number,
  endingYear: Number,
  mpaaRating: String,
  cast: [String],
  genre: [String],
  ongoing: Boolean,

});

module.exports = mongoose.model('Show', showSchema);
