const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shows', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
