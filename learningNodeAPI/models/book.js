const mongoose = require('mongoose')

//  Book schema
const bookSchema = mongoose.Schema({
  title : {
    type: String,
    required: true
  },
  author : {
    type: String,
    required: true
  },
  genre : {
    type: String,
    required: true
  },
  create_date : {
    type: Date,
    default: Date.now
  }
})

const Book = module.exports = mongoose.model('Book', bookSchema)

module.exports.getBooks = function(callback, options){
  Book.find(callback)
}