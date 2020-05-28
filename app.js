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

// db schema and model
var postSchema = new mongoose.Schema({ body: String });
var Post = mongoose.model('Post', postSchema);

// ****************
// routes 
// ****************

// index page get
app.get("/", (req, res) => {
   res.render('index');
});

// add blog post
app.post('/addpost', (req, res) => {
    var postData = new Post(req.body);
    postData.save().then( result => {
        res.redirect('/');
    }).catch(err => {
        res.status(400).send("Unable to save data");
    });
});

// ****************
// end routes 
// ****************

// Listen
app.listen(3030, () => {
    console.log('Server listing on 3030');
})