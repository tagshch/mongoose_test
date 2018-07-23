const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mentee_homework');

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', function (err) {
  console.error('connection error:', err);
});

db.once('open', function () {
  console.log('db connected...');
});

module.exports = db;