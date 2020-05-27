// Setup
var express = require('express');
var app = express();

// EJS as rendering engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// database connection
var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/node-blog")

// body parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


// routes 
app.get("/", (req, res) => {
   res.render('index');
});


// Listen
app.listen(3030, () => {
    console.log('Server listing on 3030');
})