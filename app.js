// Setup
var express = require('express');
var app = express();

// EJS as rendering engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// routes 
app.get("/", (req, res) => {
   res.render('index');
});


// Listen
app.listen(3030, () => {
    console.log('Server listing on 3030');
})