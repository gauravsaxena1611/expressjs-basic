
var express = require('../node_modules/express');
var cookieParser = require('../node_modules/cookie-parser');

var app = express();
app.use(cookieParser());

app.set('view engine', 'pug');
app.set('views', '../views');

app.get('/', function (req, res) {
    res.cookie('name', 'express').send('cookie set'); //Sets name = express
});

//To check cookies on server
app.get('/check-cookies', function (req, res) {
    console.log('Cookies: ', req.cookies);
    res.send('Cookies: ' + req.cookies);
});

app.listen(3000, function () {
    console.log('Server Started; Server is live on port 3000: http://localhost:3000/');
});


 //https://www.tutorialspoint.com/expressjs/expressjs_cookies.htm