var express = require('../node_modules/express');
var bodyParser = require('../node_modules/body-parser');
var multer = require('../node_modules/multer');

var upload = multer();
var app = express();

app.get('/', function (req, res) {
    res.render('form');
});

app.set('view engine', 'pug');
app.set('views', '../views');

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

app.post('/', function (req, res) {
    console.log(req.body);
    res.send("recieved your request!");
});

//Other routes here
app.get('*', function (req, res) {
    res.send('Sorry, this is an invalid URL.');
});

app.listen(3000, function () {
    console.log('Server Started; Server is live on port 3000: http://localhost:3000/');
});



 //https://www.tutorialspoint.com/expressjs/expressjs_form_data.htm