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

const Genre = module.exports = mongoose.model('Genre', genreSchema) 

module.exports.getGenres = function(callback, options){
  Genre.find(callback)
}