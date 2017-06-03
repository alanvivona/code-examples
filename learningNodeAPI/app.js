const express = require('express')
const app = express()
const mongoose = require('mongoose')

// db schemas and connection
mongoose.connect('mongodb://localhost/bookstore')
const DB = {
  connection  : mongoose.connection,
  Genre       : require('./models/genre'),
  Book        : require('./models/book')
}

app.get('/', function(req, res){
  res.send('go to /api/genres')
})

app.get('/api/genres', function(req, res){
  DB.Genre.getGenres(function(err, genres){
    if(err) throw err
    res.json(genres)
  })
})

app.get('/api/books', function(req, res){
  DB.Book.getBooks(function(err, books){
    if(err) throw err
    res.json(books)
  })
})

app.listen(3006)

console.log("Running on port 3006")