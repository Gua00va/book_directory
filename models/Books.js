const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
  title:  {
      type: String,
      required: true
  }, 
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  year: {
      type: String
  },
  overview: {
      type: String
  } 
});

const Books = mongoose.model('book', BookSchema);
Books.createIndexes();
module.exports = Books;