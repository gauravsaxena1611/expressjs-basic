var express = require("../node_modules/express");
var multer = require('../node_modules/multer');

var app = express();

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

var upload = multer({ storage: storage }).single('myfile');

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/uploadjavatpoint', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded successfully!");
    });
});

//Other routes here
app.get('*', function (req, res) {
    res.send('Sorry, this is an invalid URL.');
 });

app.listen(3000, function() {
    console.log('Server Started; Server is live on port 3000: http://localhost:3000/');
 });


// https://www.javatpoint.com/expressjs-file-upload