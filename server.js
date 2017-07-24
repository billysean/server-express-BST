"use strict"

require('./dbconfig.js')
var express = require('express')
var app = express()
var routes = require('./routes')
// var db = require('./dbconfig.js')
var bodyParser = require('body-parser')

//support json encoded body
app.use(bodyParser.json())
//support url encoded body
app.use(bodyParser.urlencoded({ extended: true }))

// server port
app.listen(3000, () => {
  console.log('running on port 3000')
})

//get all routes in routes/index.js
app.use('/', routes)
