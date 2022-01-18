const mongoose = require('mongoose');

// Set function that returns the db instance
const connectDB = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
