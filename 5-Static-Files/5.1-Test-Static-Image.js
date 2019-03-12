
var express = require('../node_modules/express');
var app = express();

app.set('view engine', 'pug');
app.set('views', '../views');

//built-in middleware
app.use(express.static('public'));

app.get('/first_template', function (req, res) {
   res.render('first_view');
});

app.get('/static-image', function (req, res) {
   res.render('test_image');
});

//Other routes here
app.get('*', function (req, res) {
   res.send('Sorry, this is an invalid URL.');
});

app.listen(3000, function () {
   console.log('Server Started; Server is live on port 3000: http://localhost:3000/');
});



 //https://www.tutorialspoint.com/expressjs/expressjs_static_files.htm