var express = require('../node_modules/express');
var bodyParser = require('../node_modules/body-parser');
var multer = require('../node_modules/multer');
var cookieParser = require('../node_modules/cookie-parser');

var upload = multer();
var app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

//Require the Router we defined in movies.js
var movies = require('./10.1.1-Movies-Router.js');

//Use the Router on the sub route /movies
app.use('/movies', movies);

app.listen(3000, function() {
    console.log('Server Started; Server is live on port 3000: http://localhost:3000/');
 });

 // https://www.tutorialspoint.com/expressjs/expressjs_restful_apis.htm