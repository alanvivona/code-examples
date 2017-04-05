const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// db schemas and connection
mongoose.connect('mongodb://localhost/bookstore')
const DB = {
  connection : mongoose.connection,
  Genre : require('./models/genre')
}

app.get('/', function(req, res){
  res.send('go to /api/books')
})

app.get('/api/genres', function(req, res){
  Genre.getGenres(function(err, genres){
    if(err) throw err
    res.json(genres)
  })
})

app.listen(3006)

console.log("Running on port 3006")