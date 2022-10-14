const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shows', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true (no longer supported)
});

const db = mongoose.connection;

db.on('connected', function(){
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});