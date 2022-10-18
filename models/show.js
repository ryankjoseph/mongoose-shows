const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const showSchema = new Schema({
  title: {type: String, required:true},
  description:{type: String, required:true, default:"A show"},
  image: {type: String, required:false, default:"https://bulma.io/images/placeholders/96x96.png"},
  startingYear: Number,
  endingYear: Number,
  mpaaRating: String,
  cast: [String],
  genre: [String],
  ongoing: Boolean,


});

module.exports = mongoose.model('Show', showSchema);
